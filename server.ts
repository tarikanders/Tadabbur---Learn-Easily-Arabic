import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for generating explanations
  app.post("/api/explain", async (req, res) => {
    try {
      const { word, arabic, translation, context } = req.body;
      
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      
      const prompt = `Explain the Arabic word "${arabic}" (transliteration: ${word}, translation: ${translation}). 
Context/Verse: ${context || 'None'}.
Please provide a clear, structured explanation with examples, similar to this format:
- The meaning and root of the word
- Its different roles/meanings in the Quran depending on context (if applicable)
- A small table or bullet points for clarity
- 1 or 2 examples from the Quran
Keep the explanation in French. Use markdown for formatting, bolding, and tables if useful.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are an expert in Quranic Arabic, helping a French speaker learn vocabulary. Be educational, structured, and encouraging.",
        }
      });
      
      res.json({ explanation: response.text });
    } catch (error) {
      console.error("Error generating explanation:", error);
      res.status(500).json({ error: "Failed to generate explanation." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
