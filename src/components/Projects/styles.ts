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

const cardAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const ProjectsContainer = styled.div`
  margin-bottom: 4rem;
  padding: 0px 1rem 0px 1rem;

  .skills {
    display: flex;
    align-items: center;
    gap: 8px;

    h2 {
      width: 30%;
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

  .project {
    display: flex;
    align-items: stretch;
    gap: 1rem;
    justify-content: space-between;
    margin-top: 2rem;

    .card {
      width: 100%;
      border-radius: 8px;
      background-color: #262626;
      box-shadow: 0px 0px 4px 0px #61DAFB;
      transition: box-shadow 250ms ease;
      cursor: pointer;

      img {
        border-radius: 8px 8px 0px 0px;
        overflow: hidden;
        height: 110px;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }

      div {
        display: flex;
        align-items: start;
        justify-content: space-between;
        padding: 1px 8px 8px 8px;

        span {
          color: ${props => props.theme['gray-300']};
          font-size: 0.90rem;
        }

        .separator {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          a {
            color: ${props => props.theme['gray-100']};
          }
        }
      }
    }

    .card:nth-child(1) {
      animation: ${cardAnimation} 350ms linear;
    }
    .card:nth-child(2) {
      animation: ${cardAnimation} 450ms linear;
    }
    .card:nth-child(3) {
      animation: ${cardAnimation} 650ms linear;
    }      
    .card:nth-child(4) {
      animation: ${cardAnimation} 850ms linear;
    }
    .card:nth-child(5) {
      animation: ${cardAnimation} 1000ms linear;
    }

    .card:hover {
      box-shadow: 0px 0px 7px 0px #61DAFB;
    }
  }

  @media(max-width: 870px) {
    .project {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(max-width: 520px) {
    .project {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
  }
  }

  @media(max-width: 320px) {
    .skills {
      h2 {
        width: 40%;
      }
    }
  }
`