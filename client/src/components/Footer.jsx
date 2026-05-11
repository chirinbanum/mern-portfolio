export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm font-mono">
          © {new Date().getFullYear()} Chirin Banu M
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/chirinbanum"
            target="_blank"
            rel="noreferrer"
            className="text-white/30 text-sm hover:text-teal-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/Chirin_22CSR035"
            target="_blank"
            rel="noreferrer"
            className="text-white/30 text-sm hover:text-teal-400 transition-colors"
          >
            LeetCode
          </a>
          <a
            href="mailto:chirinbanu2004@gmail.com"
            className="text-white/30 text-sm hover:text-teal-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
