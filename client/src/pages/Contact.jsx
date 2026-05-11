import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper, { SectionHeading } from "../components/SectionWrapper";

const SERVICE_ID = "service_t3gwff3";
const TEMPLATE_ID = "fvqzorc";
const PUBLIC_KEY = "4xDPHh-PqZFckrWiK";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Chirin Banu",
          title: `Message from ${form.name}`,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setError("Something went wrong. Please email me directly.");
    }
  };

  return (
    <SectionWrapper className="pt-36">
      <SectionHeading label="05 — Contact" title="Let's Talk" />

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            I'm open to internships, full-time roles, research collaborations,
            and interesting side projects. Drop me a message!
          </p>

          <div className="space-y-4">
            {[
              { label: "Email", value: "chirinbanu2004@gmail.com", href: "mailto:chirinbanu2004@gmail.com" },
              { label: "Phone", value: "+91 8148394565", href: "tel:+918148394565" },
              { label: "GitHub", value: "github.com/chirinbanum", href: "https://github.com/chirinbanum" },
              { label: "LeetCode", value: "Chirin_22CSR035", href: "https://leetcode.com/Chirin_22CSR035" },
            ].map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border border-white/8 rounded-xl px-5 py-4 hover:border-teal-400/30 hover:bg-teal-400/5 transition-all duration-200 group"
              >
                <span className="font-mono text-xs text-white/30 uppercase tracking-wider">{label}</span>
                <span className="text-white/60 text-sm group-hover:text-teal-400 transition-colors">{value} ↗</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          {status === "success" ? (
            <div className="border border-teal-400/30 bg-teal-400/5 rounded-2xl p-10 text-center">
              <p className="text-4xl mb-4">✉️</p>
              <h3 className="font-display text-white text-2xl font-bold mb-2">Message sent!</h3>
              <p className="text-white/50 text-sm">I'll get back to you soon.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 font-mono text-sm text-teal-400 hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "Ada Lovelace" },
                { name: "email", label: "Email Address", type: "email", placeholder: "ada@example.com" },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="w-full bg-surface-800 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-teal-400/50 transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="w-full bg-surface-800 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-teal-400/50 transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm font-mono">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-teal-400 text-surface-900 font-mono font-medium text-sm py-4 rounded-xl hover:bg-teal-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
