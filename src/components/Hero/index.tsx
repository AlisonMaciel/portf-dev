import { HeroContainer } from "./styles";
import { Button } from "./styles";

import dev from "../../assets/Alison.png"
import react from "../../assets/react.svg"

interface HeroProps {
  id: string
}

export function Hero( {id}: HeroProps) {
  return (
   <HeroContainer>
    <div id={id}>
      <h2>Hello</h2>
      <strong>I'm Alison</strong>
      <h1>Software Developer</h1>
      <div className="myResume">
        <Button>
          <a href="#Projects">
            Tem um projeto ?
          </a>
        </Button>
        <Button>
          <a href="#Home">
            Meu resumo
          </a>
        </Button>
      </div>
    </div>
    <div>
    <div className="hero">
      <img className="logoReact" src={react} />
      <img className="dev" src={dev} alt="Alison" />
    </div>
    </div>
   </HeroContainer>
  )
}