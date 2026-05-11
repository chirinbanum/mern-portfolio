import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Contact from "../models/Contact.js";

dotenv.config();

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save to MongoDB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Try email — don't crash if it fails
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "chirinbanu2004@gmail.com",
        subject: `New Portfolio Message from ${name}`,
        html: `
          <h2>New message from your portfolio!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thanks for reaching out!",
        html: `
          <h2>Hi ${name}! 👋</h2>
          <p>Thanks for your message. I'll get back to you shortly.</p>
          <p>— Chirin Banu M</p>
        `,
      });
    } catch (emailErr) {
      console.error("Email error:", emailErr.message);
    }

    res.status(201).json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("Contact POST error:", err);
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

export default router;