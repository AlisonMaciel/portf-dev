import { Button } from "../ui/button";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetPortal, SheetTitle, SheetTrigger } from "../ui/sheet";

import { BiMenuAltRight } from "react-icons/bi";

import  "../../styles/index.css"

import { NavLink } from "./styles";
import { useState } from "react";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="h-5 w-5" asChild>
        <Button 
          onClick={() => setIsOpen(!isOpen)} 
          variant="outline" className="bg-transparent border-0 text-white cursor-pointer ">
          <BiMenuAltRight className="text-2xl"/>
        </Button>
      </SheetTrigger>
      <SheetPortal>
      <SheetContent side='right' className="bg-[#0a0a0a]">
      <SheetHeader>
        <SheetTitle className="text-xl text-white ">
          Bem-vindo(a)
        </SheetTitle>
        <SheetDescription className="text-sm text-gray-200">
          Este menu está sendo usado da lib: Shadcn/UI, e está acessível para qualquer pessoa!
        </SheetDescription>
      </SheetHeader>
        <NavLink>
          <ul>
            <li>
              <a href="#Home">
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="border-0 bg-transparent text-white cursor-pointer hover:text-gray-300">
                  Home
                </button>
                </a>
              <a href="#About">
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="border-0 bg-transparent text-white cursor-pointer hover:text-gray-300">
                  Sobre
                </button>
                </a>
              <a href="#Skills">
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="border-0 bg-transparent text-white cursor-pointer hover:text-gray-300">
                  Habilidades
                </button>
              </a>
              <a href="#Projects">
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="border-0 bg-transparent text-white cursor-pointer hover:text-gray-300">
                  Projetos
                </button>
              </a>
              <a href="#Contact">
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="border-0 bg-transparent text-white cursor-pointer hover:text-gray-300">
                  Contato
                </button>
              </a>
            </li>
          </ul>
        </NavLink>
      </SheetContent>
      </SheetPortal>
    </Sheet>
  )
}