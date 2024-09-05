// pages/api/download-pdf.js

import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  // Define the path to the PDF file in the 'public' directory
  const filePath = path.join(process.cwd(), 'public', 'resume.pdf');

  // Read the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(404).json({ error: 'File not found' });
      return;
    }

    // Set the content type and disposition to allow for download or inline display
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="resume.pdf"');
    res.send(data);
  });
}
