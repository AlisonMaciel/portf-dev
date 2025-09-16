import { SkilsContainer } from "./styles";

import {FaHtml5} from "react-icons/fa6"
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoMdGitBranch } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";

export function Skills() {
  return (
    <SkilsContainer>
      <div>
        <div className="scroll-wrapper">
          <div className="infinite">
          <FaHtml5 className="html" />
          <FaCss3Alt className="css" />
          <IoLogoJavascript className="js" />
          <SiTypescript className="ts" />
          <FaReact className="react" />
          <SiVite className="vite" />
          <RiNextjsFill className="next" />
          <IoMdGitBranch className="git" />
          <FaGithub className="github" />
          <FaFigma className="figma" />
          <RiTailwindCssFill className="tailwind" />
          <SiStyledcomponents className="styled" />
          </div>
          <div className="scroll">
          <FaHtml5 className="html" />
          <FaCss3Alt className="css" />
          <IoLogoJavascript className="js" />
          <SiTypescript className="ts" />
          <FaReact className="react" />
          <SiVite className="vite" />
          <RiNextjsFill className="next" />
          <IoMdGitBranch className="git" />
          <FaGithub className="github" />
          <FaFigma className="figma" />
          <RiTailwindCssFill className="tailwind" />
          <SiStyledcomponents className="styled" />
          </div>
        </div>
      </div>
    </SkilsContainer>
  )
}