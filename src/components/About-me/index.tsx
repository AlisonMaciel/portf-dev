import { FiPenTool, FiSettings } from "react-icons/fi";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import { AboutMeContainer } from "./styles";

interface AboutMeProps {
  id: string
}

export function AboutMe({id}:AboutMeProps) {
  return (
    <AboutMeContainer id={id}>
      <div className="skills">
        <div className="separator">
          <div className="line-1"></div>
          <span></span>
          <div className="line-1"></div>
          <span></span>
          <div className="line-1"></div>
          <span></span>
        </div>
        <div className="hard-skills">
          <div className="content">
            <FiSettings className="gear" size={32} />
            <strong>Web Site Developer</strong> 
          </div>
          <div className="content">
            <FiPenTool className="pincel" size={32} />
            <strong>UI/UX Designer</strong> 
          </div>
          <div className="content">
            <div className="separatorArrow">
              <MdOutlineKeyboardArrowLeft className="arrowLeft" size={32} />
              <MdKeyboardArrowRight className="arrowRight" size={32} />
            </div>
            <strong>Frontend Engineer</strong> 
          </div>
        </div>
      <div>
      </div>
      </div>
      <div className="about">
        <h1>Sobre mim</h1>
        <p>Sou um desenvolvedor front-end em constante evolução, com foco em tecnologias modernas como ReactJS, TypeScript, JavaScript, Vite, Bibliotecas (Shadcn/UI | Recharts | Radix/UI) Styled-Components, Taiwilnd, CSS Modules. Tenho experiência prática em projetos full stack, mas meu principal objetivo hoje é me especializar no ecossistema front-end, explorando profundamente Next.js, UI interativa e performance.</p>
        <div className="separator-card">
          <div className="card">
            <strong>653</strong>
            <span>Seguidores</span>
          </div>
          <div className="card">
            <strong>31</strong>
            <span>Projetos</span>
          </div>
          <div className="card">
            <strong>12</strong>
            <span>Certificados</span>
          </div>
        </div>
      </div>
    </AboutMeContainer>
  )
}