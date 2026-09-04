import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServiceGrid } from "./components/ServiceGrid";
import { HowItWorks } from "./components/HowItWorks";
import { ProjectBuilderPreview } from "./components/ProjectBuilderPreview";
import { SelectedProjects } from "./components/SelectedProjects";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <ServiceGrid />
        <HowItWorks />
        <ProjectBuilderPreview />
        <SelectedProjects />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}