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

export const ContactContainer = styled.div`
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

  .mid {
    width: 100%;
    height: 150px;

    a {
      text-decoration: none;
      color: ${props => props.theme['gray-100']};
    }
    
    .card-mid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 2rem auto;
      gap: 0.75rem;
      border-radius: 8px;
      width: 200px;
      height: 150px;
      cursor: pointer;
      transition: background-color 600ms ease;
      background-color: #424873;

      strong {
        color: ${props => props.theme['gray-100']};
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .linkedin {
        color: #0A66C2;
      }
    }
    .card-mid:hover {
      background-color: rgba(10, 102, 194, 0.08);
      box-shadow: 0 4px 12px rgba(10, 102, 194, 0.3);
    }
  }

  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0rem 4rem 0rem;

    a {
      text-decoration: none;
      color: ${props => props.theme['gray-100']};
    }
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      border-radius: 8px;
      min-width: 200px;
      height: 150px;
      cursor: pointer;
      transition: background-color 600ms ease;
      background-color: #424873;
      margin-right: 1rem;

      strong {
        color: ${props => props.theme['gray-100']};
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .whatsapp {
        color: #25D366;
      }

      .git {
        color: #181717;
      }
    }

    .card:nth-child(1) {
      margin-left: 10px;
    }

    .card:nth-child(1):hover {
      background-color: rgba(37, 211, 102, 0.08);
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
    }

    .card:nth-child(2) {
      margin-left: 10px;
    }

    .card:nth-child(2):hover {
      background-color: rgba(24, 23, 23, 0.08);
      box-shadow: 0 4px 12px rgba(24, 23, 23, 0.3);
    }
    
    .card:hover {
      background-color: #5B378E;
    }

  }

  @media (max-width: 500px) {
    .contact {
      flex-direction: column;
    }
  }
`