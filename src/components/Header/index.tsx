import { Menu } from "../Menu";
import { HeaderContainer, NavLinkHeader } from "./styles";

import "../../styles/global.ts"

export function Header() {
  return (
    <HeaderContainer>
      <h2>Alison Maciel</h2>
      <NavLinkHeader>
        <ul>
          <li>
            <a href="#Home">Home</a>
            <a href="#About">Sobre</a>
            <a href="#Skills">Habilidades</a>
            <a href="#Projects">Projetos</a>
            <a href="#Contact">Contato</a>
          </li>
        </ul>
      </NavLinkHeader>
      <div className="menu">
      <Menu />
      </div>
    </HeaderContainer>
  )
}