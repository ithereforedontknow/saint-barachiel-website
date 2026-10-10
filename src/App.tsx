import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Enrollment from "./pages/Enrollment";
import FAQ from "./pages/FAQ";
import Visit from "./pages/Visit";

function ScrollToTop(): null {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--color-ink)] font-sans">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/visit" element={<Visit />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
