import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Error:", error);
  } else {
    console.log("✅ Gmail connected! Sending test email...");
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "chirinbanu2004@gmail.com",
      subject: "Test Email from Portfolio",
      text: "If you see this, email is working!",
    }, (err, info) => {
      if (err) console.log("❌ Send error:", err);
      else console.log("✅ Email sent!", info.response);
    });
  }
});