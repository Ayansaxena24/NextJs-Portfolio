// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      host: 'smtp.your-email-provider.com', // e.g., 'smtp.gmail.com'
      port: 587, // Port for secure SMTP (usually 465 or 587)
      secure: false, // Use TLS
      auth: {
        user: 'your-email@example.com', // Your email address
        pass: 'your-email-password', // Your email password or app password
      },
    });

    // Setup email data
    const mailOptions = {
      from: '"Your Name" <your-email@example.com>', // Sender address
      to: 'recipient@example.com', // List of recipients
      subject: subject || 'Contact Form Submission', // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
      html: `<strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Message:</strong> ${message}`, // HTML body
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
