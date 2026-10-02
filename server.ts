import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // Ensure data storage directory exists for recording client inquiries
  const dataDir = path.resolve(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch {
      // safe fallback
    }
  }

  const inquiriesFilePath = path.join(dataDir, 'inquiries.json');

  // In-memory cache of inquiries
  let inquiriesList: any[] = [];
  if (fs.existsSync(inquiriesFilePath)) {
    try {
      const data = fs.readFileSync(inquiriesFilePath, 'utf-8');
      inquiriesList = JSON.parse(data);
    } catch {
      inquiriesList = [];
    }
  }

  // 1. Genuine Client Inquiry Submission API Endpoint
  app.post('/api/inquiries', async (req, res) => {
    try {
      const {
        fullName,
        email,
        whatsapp,
        service,
        bookTitle,
        description,
        budget,
        preferredContact
      } = req.body;

      // Server-side validation
      if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
        return res.status(400).json({ error: 'Please provide your full name.' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email.trim())) {
        return res.status(400).json({ error: 'Please provide a valid email address.' });
      }

      if (!service || typeof service !== 'string') {
        return res.status(400).json({ error: 'Please select a service of interest.' });
      }

      if (!description || typeof description !== 'string' || description.trim().length < 10) {
        return res.status(400).json({ error: 'Please describe your book project in at least 10 characters.' });
      }

      const inquiryId = 'DCW-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(Math.random() * 899 + 100);
      const newInquiry = {
        id: inquiryId,
        submittedAt: new Date().toISOString(),
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        whatsapp: whatsapp ? whatsapp.trim() : null,
        service: service.trim(),
        bookTitle: bookTitle ? bookTitle.trim() : null,
        description: description.trim(),
        budget: budget ? budget.trim() : 'Not Specified',
        preferredContact: preferredContact || 'Email',
        status: 'received'
      };

      inquiriesList.unshift(newInquiry);

      // Persist to file
      try {
        fs.writeFileSync(inquiriesFilePath, JSON.stringify(inquiriesList, null, 2), 'utf-8');
      } catch (err) {
        console.error('Failed to write inquiry to disk:', err);
      }

      console.log(`[DREAM CHASER WRITES] New inquiry received: ${inquiryId} from ${newInquiry.fullName} (${newInquiry.email}) for ${newInquiry.service}`);

      return res.status(201).json({
        success: true,
        inquiryId,
        message: 'Your inquiry has been successfully recorded. The Dream Chaser Writes team will review your project brief and follow up promptly via your preferred contact method.',
        submittedAt: newInquiry.submittedAt
      });
    } catch (err: any) {
      console.error('Error handling inquiry submission:', err);
      return res.status(500).json({ error: 'Internal server error while processing your inquiry. Please try again.' });
    }
  });

  // Health and backend status check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'operational',
      brand: 'DREAM CHASER WRITES',
      inquiriesCount: inquiriesList.length,
      timestamp: new Date().toISOString()
    });
  });

  // Vite middleware in dev or static files in production
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Dream Chaser Writes server running at http://0.0.0.0:${PORT} [${isProd ? 'production' : 'development'}]`);
  });
}

startServer().catch((err) => {
  console.error('Server failed to start:', err);
});
