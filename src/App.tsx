import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Statement } from "./components/Statement";
import { Expertise } from "./components/Expertise";
import { Process } from "./components/Process";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Hero />
        <Statement />
        <Expertise />
        <Process />
        <Work />
        <About />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}