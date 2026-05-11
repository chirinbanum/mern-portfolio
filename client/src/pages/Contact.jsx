import { useState } from "react";
import SectionWrapper, { SectionHeading } from "../components/SectionWrapper";

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send a default message since the textarea is removed
        body: JSON.stringify({
          ...form,
          message: "Contact request from portfolio",
        }),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      setForm({ name: "", email: "" });
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please email me directly.");
    }
  };

  const contacts = [
    {
      label: "Email",
      value: "chirinbanu2004@gmail.com",
      href: "mailto:chirinbanu2004@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 8148394565",
      href: "tel:+918148394565",
    },
    {
      label: "GitHub",
      value: "github.com/chirinbanum",
      href: "https://github.com/chirinbanum",
    },
    {
      label: "LeetCode",
      value: "Chirin_22CSR035",
      href: "https://leetcode.com/Chirin_22CSR035",
    },
  ];

  const fields = [
    {
      name: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Ada Lovelace",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "ada@example.com",
    },
  ];

  return (
    <SectionWrapper className="pt-36">
      <SectionHeading label="05 - Contact" title="Let's Talk" />

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            I'm open to internships, full-time roles, research collaborations,
            and interesting side projects. Feel free to reach out!
          </p>

          <div className="space-y-4">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border border-white/8 rounded-xl px-5 py-4 hover:border-teal-400/30 hover:bg-teal-400/5 transition-all duration-200 group"
              >
                <span className="font-mono text-xs text-white/30 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-white/60 text-sm group-hover:text-teal-400 transition-colors">
                  {item.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form (without Message field) */}
        <div>
          {status === "success" ? (
            <div className="border border-teal-400/30 bg-teal-400/5 rounded-2xl p-10 text-center">
              <p className="text-4xl mb-4">✉️</p>
              <h3 className="font-display text-white text-2xl font-bold mb-2">
                Message sent!
              </h3>
              <p className="text-white/50 text-sm">
                I'll get back to you soon.
              </p>

              <button
                onClick={() => setStatus("idle")}
                className="mt-6 font-mono text-sm text-teal-400 hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {fields.map((field) => (
                <div key={field.name}>
                  <label className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-2">
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-surface-800 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-teal-400/50 transition-colors"
                  />
                </div>
              ))}

              {error && (
                <p className="text-red-400 text-sm font-mono">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-teal-400 text-surface-900 font-mono font-medium text-sm py-4 rounded-xl hover:bg-teal-500 transition-all duration-200 disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}