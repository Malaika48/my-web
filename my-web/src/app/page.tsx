import HomeSection from "./components/home-section"
import AboutSection from "./components/about-section"

import ProjectsSection from "./components/projects-section"
import ContactSection from "./components/contact-section"

export default function Home() {
  return (
    <div className="space-y-20 py-10">
      <HomeSection />
      <AboutSection />
     
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

