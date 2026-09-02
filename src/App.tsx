import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { SelectedWork } from "./components/SelectedWork";
import { Manifesto } from "./components/Manifesto";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Process />
        <SelectedWork />
        <Manifesto />
        <CTA />
      </main>
      <Footer />
    </>
  );
}