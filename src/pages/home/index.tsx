import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeContainer } from "./styles";
import { Skills } from "@/components/Skills";
import { AboutMe } from "@/components/About-me";
import { TechnologicalSkills } from "@/components/Technological-skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Hero id="Home"/>
      <Skills />
      <AboutMe id="About" />
      <TechnologicalSkills id="Skills" />
      <Projects id="Projects" />
      <Contact id="Contact"/>
      <Footer />
    </HomeContainer>
  )
}