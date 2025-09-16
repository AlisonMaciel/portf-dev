import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { ProjectsContainer } from "./styles";

import dashBoard from "../../assets/dashboard.png"
import foodExplorer from "../../assets/foodExplorer.png"
import githubBlog from "../../assets/githubBlog.png"
import redesSociais from "../../assets/redesSociais.png"
import rocketMovies from "../../assets/rocketMovies.png"

interface ProjectsProps {
  id: string
}

export function Projects({id}:ProjectsProps) {
  return (
    <ProjectsContainer>
      <div id={id} className="skills">
        <div className="borderOne"></div>
        <h2>Projetos</h2>
        <div className="borderTwo"></div>
      </div>
      <div className="project">
        <div className="card">
          <img src={dashBoard} alt="" />
          <div>
            <span>Dashboard</span>
            <div className="separator">
              <a 
              href="https://www.linkedin.com/feed/update/urn:li:activity:7351638538498580480/" target="_blank">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={foodExplorer} alt="" />
          <div>
            <span>FoodExplorer</span>
            <div className="separator">
              <a href="https://github.com/AlisonMaciel/foodExplorer" target="_blank">
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/feed/update/urn:li:activity:7348426071400194049/"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={githubBlog} alt="" />
          <div>
            <span>GitHub Blog</span>
            <div className="separator">
              <a href="https://github.com/AlisonMaciel/blog-ts" target="_blank">
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/feed/update/urn:li:activity:7354595791157530624/"  target="_blank"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={redesSociais} alt="" />
          <div>
            <span>Redes Sociais</span>
            <div className="separator">
              <a href="https://github.com/AlisonMaciel/fundamentos-reactjs" target="_blank">
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/feed/update/urn:li:activity:7355699914862960642/"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={rocketMovies} alt="" />
          <div>
            <span>RocketMovies</span>
            <div className="separator">
              <a 
                href="https://github.com/AlisonMaciel/RocketMovies-React.js-Project" target="_blank"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/feed/update/urn:li:activity:7348428913842307073/"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProjectsContainer>
  )
}