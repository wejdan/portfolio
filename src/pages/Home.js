import React from "react";
import Hero from "../components/Hero";
import SelectedWork from "../components/sections/SelectedWork";
import SkillsSection from "../components/sections/SkillsSection";
import ContactSection from "../components/sections/ContactSection";
function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

export default Home;
