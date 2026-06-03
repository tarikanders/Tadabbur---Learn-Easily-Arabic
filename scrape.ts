import fs from 'fs';
import https from 'https';

function fetchPage(page: number): Promise<string> {
    return new Promise((resolve, reject) => {
        https.get(`https://corpus.quran.com/lemmas.jsp?page=${page}`, {
          headers: {
            'User-Agent': 'Mozilla/5.0'
          }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

(async () => {
    let allData = [];
    for(let i=1; i<=11; i++) {
        console.log("Fetching page " + i);
        const html = await fetchPage(i);
        
        // Find the table body or rows
        const matches = html.matchAll(/<tr>\s*<td.*?>(.*?)<\/td>\s*<td.*?>(.*?)<\/td>\s*<td.*?>(.*?)<\/td>\s*<td.*?>(.*?)<\/td>\s*<\/tr>/gs);
        for (const match of matches) {
            const arabic = match[1].replace(/<[^>]+>/g, '').trim();
            const translit = match[2].replace(/<[^>]+>/g, '').trim();
            const freq = parseInt(match[3].replace(/<[^>]+>/g, '').trim(), 10);
            const type = match[4].replace(/<[^>]+>/g, '').trim();
            
            if (arabic !== 'Lemma' && !isNaN(freq)) {
                allData.push({ id: translit + '_' + freq, arabic, transliteration: translit, frequency: freq, type });
            }
        }
    }
    
    // Sort by frequency descending
    allData.sort((a, b) => b.frequency - a.frequency);
    
    // Deduplicate
    const uniqueData = [];
    const seen = new Set();
    for (const item of allData) {
      if (!seen.has(item.arabic + '_' + item.type)) {
        seen.add(item.arabic + '_' + item.type);
        uniqueData.push(item);
      }
    }
    
    fs.writeFileSync('scraped.json', JSON.stringify(uniqueData, null, 2));
    console.log("Saved " + uniqueData.length + " words");
})();
