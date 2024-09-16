// pages/api/download-pdf.js
import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Resolve the path to the PDF file in the public directory
    const filePath = path.resolve('public', 'resume.pdf');

    try {
      // Read the PDF file from the file system
      const file = fs.readFileSync(filePath);

      // Set appropriate headers
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline; filename=resume.pdf');

      // Send the file
      res.send(file);
    } catch (error) {
      res.status(404).send('File not found');
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
