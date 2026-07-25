import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // Initialize Gemini AI Client
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // API Health Check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'KrishiHub Bangladesh' });
  });

  // AI Agriculture Advisor Endpoint
  app.post('/api/gemini/advisor', async (req, res) => {
    try {
      const { prompt, category, imageBase64, mimeType } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: 'প্রম্পট প্রয়োজন।' });
      }

      const ai = getAiClient();
      if (!ai) {
        return res.status(503).json({
          error: 'Gemini API Key সেট করা নেই। দয়া করে Secrets প্যানেলে GEMINI_API_KEY প্রদান করুন।',
        });
      }

      const systemInstruction = `আপনি "কৃষিহাব বাংলাদেশ" এর প্রধান জ্যেষ্ঠ কৃষি বিজ্ঞানী ও বিএআরআই/ডিএই বিশেষজ্ঞ পরামর্শক। 
আপনার কাজ হলো বাংলাদেশের কৃষক, কৃষি উদ্যোক্তা ও মাঠ কর্মকর্তাদের প্রশ্নের বাংলা ভাষায় বৈজ্ঞানিক ও ব্যবহারিক সমাধান দেওয়া।
আপনার উত্তরের ধরণ:
১. সহজ ও স্পষ্ট বাংলায় ধাপে ধাপে পরামর্শ দিন।
২. সঠিক সার পরিমাপ (ইউরিয়া, টিএসপি, এমপি, জিপসাম), আইপিএম দমন ও আধুনিক চাষাবাদ পদ্ধতি উল্লেখ করুন।
৩. উত্তরটি সুন্দর মার্কডাউন ফরম্যাটে (শিরোনাম, বুলেট পয়েন্ট, টেবিল) উপস্থাপন করুন।`;

      let contents: any;

      if (imageBase64 && mimeType) {
        contents = {
          parts: [
            {
              inlineData: {
                data: imageBase64.replace(/^data:image\/\w+;base64,/, ''),
                mimeType: mimeType || 'image/jpeg',
              },
            },
            {
              text: `ক্যাটাগরি: ${category || 'রোগবালাই ও উদ্ভিদ সমস্যা'}\nপ্রশ্ন: ${prompt}`,
            },
          ],
        };
      } else {
        contents = `ক্যাটাগরি: ${category || 'সাধারণ কৃষি তথ্য'}\nপ্রশ্ন: ${prompt}`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({
        reply: response.text || 'দুঃখিত, কোনো উত্তর পাওয়া যায়নি।',
      });
    } catch (error: any) {
      console.error('Gemini Advisor Error:', error);
      res.status(500).json({
        error: error.message || 'কৃষি পরামর্শ প্রক্রিয়াকরণে সমস্যা হয়েছে।',
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`KrishiHub Bangladesh Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
