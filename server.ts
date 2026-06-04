import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
dotenv.config();

const SYSTEM_PROMPT = `Tu es un expert pédagogue en arabe coranique qui aide un francophone à mémoriser du vocabulaire.
Ton rôle : donner une "astuce" claire, structurée et encourageante pour retenir un mot.
Règles de réponse :
- Réponds UNIQUEMENT en français.
- Réponds directement avec l'astuce, sans préambule ("Voici...", "Bien sûr...") ni méta-commentaire.
- Sois synthétique : une demi-page maximum.
- Utilise le markdown (titres courts, gras, listes, et un petit tableau si utile).
- Structure suggérée : sens & racine ; moyen mnémotechnique pour retenir le mot ; 1 à 2 exemples coraniques courts (arabe + traduction française) ; nuances de sens selon le contexte si pertinent.`;

const getAnthropicClient = () => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY is not set.");
  return new Anthropic({ apiKey });
};

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || "3000", 10);

  app.use(express.json());

  app.post("/api/explain", async (req, res) => {
    try {
      const { word, arabic, translation, context } = req.body ?? {};

      if (!arabic && !word) {
        return res.status(400).json({ error: "Aucun mot fourni." });
      }

      const client = getAnthropicClient();
      const model = process.env.ANTHROPIC_MODEL || "claude-opus-4-8";

      const userPrompt =
        `Mot arabe : ${arabic ?? "(non fourni)"}\n` +
        `Translittération : ${word ?? "(non fournie)"}\n` +
        `Traduction française : ${translation ?? "(non fournie)"}\n` +
        `Contexte / verset : ${context && String(context).trim() ? context : "aucun"}\n\n` +
        `Donne une astuce pour mémoriser ce mot.`;

      const message = await client.messages.create({
        model,
        max_tokens: 1024,
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: [{ role: "user", content: userPrompt }],
      });

      const explanation = message.content
        .filter((block): block is Anthropic.TextBlock => block.type === "text")
        .map((block) => block.text)
        .join("\n")
        .trim();

      res.json({ explanation: explanation || "Désolé, aucune astuce n'a pu être générée." });
    } catch (error) {
      console.error("Error generating explanation:", error);
      if (error instanceof Anthropic.AuthenticationError) {
        return res.status(500).json({ error: "Clé API Claude invalide ou manquante." });
      }
      if (error instanceof Anthropic.RateLimitError) {
        return res.status(503).json({ error: "Trop de requêtes vers l'IA. Réessayez dans un instant." });
      }
      const msg = error instanceof Error ? error.message : String(error);
      if (msg.includes("ANTHROPIC_API_KEY is not set")) {
        return res.status(500).json({ error: "La clé ANTHROPIC_API_KEY n'est pas configurée sur le serveur." });
      }
      res.status(500).json({ error: "Impossible de générer l'astuce pour le moment." });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
