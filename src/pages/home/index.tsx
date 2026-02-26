import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeContainer } from "./styles";
import { Skills } from "@/components/Skills";
import { AboutMe } from "@/components/About-me";
import { TechnologicalSkills } from "@/components/Technological-skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import DarkVeil from "@/components/DarkVeil";


export function Home() {
  return (
    <div className="relative">
      <HomeContainer>
        <div className="fixed inset-0 -z-10">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
        </div>
        <Header />
        <Hero id="Home"/>
        <Skills />
        <AboutMe id="About" />
        <TechnologicalSkills id="Skills" />
        <Projects id="Projects" />
        <Contact id="Contact"/>
        <Footer />
      </HomeContainer>
    </div>
  )
}