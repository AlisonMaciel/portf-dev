import styled, { keyframes } from "styled-components";

const AnimationBorder = keyframes`
  0% {
    background-color: blue;
    transform: translateX(-100%);
  }

  25% {
    background-color: red;
    transform: transfortranslateX(-100%)
  }

  50% {
    background-color: pink;
    transform: transfortranslateX(-100%)
  }

  75% {
    background-color: aqua;
    transform: transfortranslateX(-100%)
  }

  100% {
    background-color: blueviolet;
    transform: transfortranslateX(-100%)
  }
`

const AnimationBorderRight = keyframes`
  0% {
    background-color: blue;
    transform: translateX(100%);
  }

  25% {
    background-color: red;
    transform: transfortranslateX(100%)
  }

  50% {
    background-color: pink;
    transform: transfortranslateX(100%)
  }

  75% {
    background-color: aqua;
    transform: transfortranslateX(100%)
  }

  100% {
    background-color: blueviolet;
    transform: transfortranslateX(100%)
  }    
`

export const TechnologicalSkillsContainer = styled.div`
  .skills {
    display: flex;
    align-items: center;
    gap: 8px;

    h2 {
      width: 45%;
      font-size: 1.7rem;
      font-weight: 500;
      color: ${props => props.theme['gray-100']};
      text-align: center;
    }

    .borderOne {
      width: 100%;
      height: 1px;
      background-color: ${props => props.theme['gray-100']};
      box-shadow: 0px 0px 2px 0px;
      animation: ${AnimationBorder} 1s linear;
    }

    .borderTwo {
      width: 100%;
      height: 1px;
      background-color: ${props => props.theme['gray-100']};
      box-shadow: 0px 0px 2px 0px;
      animation: ${AnimationBorderRight} 1s linear;
    }
  }

  .charts {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }

  @media (max-width: 1000px) {
    .charts {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 905px) {
    .skills {
      h2 {
        width: 60%;
      }
    }
  }

  @media (max-width: 768px) {
    .charts {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 725px) {
    .skills {
      h2 {
        width: 70%;
      }
    }
  }

  @media (max-width: 650px) {
    .skills {
      h2 {
        width: 80%;
      }
    }
  }

  @media (max-width: 595px) {
    .skills {
      h2 {
        width: 100%;
      }
    }
  }

  @media (max-width: 515px) {
    .skills {
      h2 {
        width: 120%;
      }
    }
  }

  @media (max-width: 445px) {
    .skills {
      h2 {
        width: 130%;
      }
    }
  }

    @media (max-width: 425px) {
    .skills {
      h2 {
        width: 140%;
      }
    }
  }

  @media (max-width: 375px) {
    .skills {
      h2 {
        width: 170%;
      }
    }
  }

  @media (max-width: 320px) {
    .skills {
      h2 {
        width: 230%;
      }
    }
  }

`