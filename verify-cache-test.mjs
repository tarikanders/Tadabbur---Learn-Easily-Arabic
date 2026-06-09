import { chromium } from 'playwright';

const PROD_URL = 'https://tadabbur-440023760270.us-west1.run.app';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const apiCalls = [];
  page.on('request', req => {
    if (req.url().includes('/api/explain')) apiCalls.push({ time: Date.now() });
  });
  const apiResponses = [];
  page.on('response', async res => {
    if (res.url().includes('/api/explain')) {
      const body = await res.json().catch(() => ({}));
      apiResponses.push({ status: res.status(), snippet: body.explanation?.slice(0, 120) });
    }
  });

  console.log('--- Step 1: Load /vocabulaire ---');
  await page.goto(`${PROD_URL}/vocabulaire`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(4000);

  const btns = await page.$$eval('button', bs => bs.map(b => b.innerText.trim()).filter(t => t));
  console.log('Buttons:', btns);

  // Trigger via JS to bypass motion overlay
  console.log('\n--- Step 2: First click (should call API + save to Firestore) ---');
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Astuce'));
    if (btn) btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  });
  await page.waitForTimeout(12000);

  console.log('API calls:', apiCalls.length);
  if (apiResponses.length > 0) {
    console.log('✅ Explanation generated:', apiResponses[0].snippet);
  } else {
    console.log('❌ No API response');
  }

  // Get the word ID from the page to verify Firestore doc
  const wordId = await page.evaluate(() => {
    const text = document.body.innerText;
    const match = text.match(/Carte (\d+) \/ \d+/);
    return match ? match[1] : 'unknown';
  });
  console.log('Card index:', wordId);

  // Check modal text
  const modalText = await page.evaluate(() => {
    return document.body.innerText.slice(0, 1000);
  });
  const hasExplanation = modalText.includes('racine') || modalText.includes('Racine') ||
                         modalText.includes('mnémo') || modalText.includes('##') ||
                         modalText.includes('Sens');
  console.log('Explanation visible in page:', hasExplanation);

  // Close modal with Escape
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);

  // Second click on same word (same card, same word)
  console.log('\n--- Step 3: Second click (should use Firestore cache, no API call) ---');
  const before = apiCalls.length;
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Astuce'));
    if (btn) btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  });
  await page.waitForTimeout(5000);

  const newCalls = apiCalls.length - before;
  console.log('New API calls on second click:', newCalls);

  if (newCalls === 0 && apiCalls.length > 0) {
    console.log('✅ CACHE HIT — astuce affichée sans appel API');
  } else if (newCalls === 0 && apiCalls.length === 0) {
    console.log('⚠️  Aucun appel API du tout (auth non chargée en headless)');
  } else {
    console.log('❌ CACHE MISS — API rappelée');
  }

  console.log('\n=== TOTAL /api/explain calls:', apiCalls.length, '===');
  await browser.close();
})();
