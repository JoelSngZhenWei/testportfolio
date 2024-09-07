import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS, // Use environment variable
      },
    });

    // Set up email data
    const mailOptions = {
      from: email,
      to: 'joelsngzw@gmail.com',
      subject: `${subject} - Message from ${name}`,
      text: `You have received a new message via your portfolio website.\nFrom: ${name} (\nEmail: ${email}):\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email.', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
