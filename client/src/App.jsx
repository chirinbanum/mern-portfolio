import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

const confettiColors = [
  "#2DD4BF", "#a7f3d0", "#ffffff", "#14B8A6",
  "#6ee7b7", "#34d399", "#fbbf24", "#f472b6"
];

function Confetti() {
  const pieces = Array.from({ length: 80 });
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((_, i) => {
        const color = confettiColors[i % confettiColors.length];
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 2 + Math.random() * 2;
        const size = 6 + Math.random() * 8;
        const rotate = Math.random() * 360;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: "-20px",
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              borderRadius: Math.random() > 0.5 ? "50%" : "2px",
              animation: `fall ${duration}s ${delay}s ease-in forwards`,
              transform: `rotate(${rotate}deg)`,
              opacity: 0.9,
            }}
          />
        );
      })}
    </div>
  );
}

function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState("enter"); // enter | show | exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("show"), 300);
    const t2 = setTimeout(() => setPhase("exit"), 3000);
    const t3 = setTimeout(() => onDone(), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <>
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes blink-text {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fade-out {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(1.05); }
        }
        .splash-in { animation: scale-in 0.5s ease forwards; }
        .splash-out { animation: fade-out 0.6s ease forwards; }
        .blink { animation: blink-text 1.2s ease-in-out infinite; }
      `}</style>

      <Confetti />

      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(135deg, #0A0F0D 0%, #0F1712 60%, #162019 100%)" }}
      >
        <div className={phase === "exit" ? "splash-out" : "splash-in"}>
          {/* Emoji */}
          <div className="text-6xl text-center mb-6">🎉</div>

          {/* Welcome text */}
          <p className="font-mono text-teal-400 text-xs tracking-widest uppercase text-center mb-4">
            Welcome to my portfolio
          </p>

          {/* Main blinking sentence */}
          <h1
            className="blink font-display font-bold text-3xl md:text-5xl text-white text-center leading-tight px-6"
            style={{ maxWidth: "600px" }}
          >
            Building the future,<br />
            <span style={{
              background: "linear-gradient(135deg, #2DD4BF, #a7f3d0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              one line at a time ✨
            </span>
          </h1>

          {/* Sub text */}
          <p className="text-white/40 text-center text-sm font-mono mt-6">
            Chirin Banu M — Software Developer
          </p>

          {/* Loading dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-teal-400"
                style={{
                  animation: `blink-text 1s ${i * 0.2}s ease-in-out infinite`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <BrowserRouter>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${showSplash ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
