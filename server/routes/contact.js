import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
import Contact from "../models/Contact.js";

dotenv.config();

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save to MongoDB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Send email to you
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "chirinbanu2004@gmail.com",
        subject: `New Portfolio Message from ${name}`,
        html: `
          <h2>New message from your portfolio!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
    } catch (emailErr) {
      console.error("Notification email error:", emailErr.message);
    }

    // Send thank you email to visitor
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "chirinbanu2004@gmail.com",
        subject: `Thank you ${name} for reaching out!`,
        html: `
          <h2>Hi ${name}!</h2>
          <p>Thank you for reaching out. I have received your message and will get back to you as soon as possible.</p>
          <br/>
          <p>Here's a copy of your message:</p>
          <p><em>${message}</em></p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Chirin Banu M</strong></p>
          <p>Software Developer</p>
        `,
      });
    } catch (emailErr) {
      console.error("Thank you email error:", emailErr.message);
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