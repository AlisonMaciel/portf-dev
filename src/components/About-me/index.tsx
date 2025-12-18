import { FiPenTool, FiSettings } from "react-icons/fi";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import { AboutMeContainer } from "./styles";

interface AboutMeProps {
  id: string;
}

export function AboutMe({ id }: AboutMeProps) {
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
        <div></div>
      </div>
      <div className="about">
        <h1>Sobre mim</h1>
        <p>
          Sou um Desenvolvedor Full Stack apaixonado por tecnologia e inovação,
          com sólida experiência no Front-end moderno utilizando ReactJS,
          Next.js, TypeScript, JavaScript e Vite. Tenho domínio de bibliotecas e
          ferramentas como Shadcn/UI, Radix/UI, Recharts, Styled-Components,
          TailwindCSS e CSS Modules, criando interfaces acessíveis, responsivas
          e de alta performance. No Back-end, possuo experiência prática com
          Node.js, Docker, Prisma ORM, Knex e PostgreSQL, desenvolvendo
          aplicações escaláveis, seguras e performáticas. Trabalho com
          autenticação JWT, manipulação de APIs RESTful, arquitetura limpa,
          injeção de dependência, e boas práticas de versionamento com Git.
        </p>
        <div className="separator-card">
          <div className="card">
            <strong>869</strong>
            <span>Seguidores</span>
          </div>
          <div className="card">
            <strong>32</strong>
            <span>Projetos</span>
          </div>
          <div className="card">
            <strong>12</strong>
            <span>Certificados</span>
          </div>
        </div>
      </div>
    </AboutMeContainer>
  );
}
