import styled, { keyframes } from "styled-components";

const gear = keyframes`
  from {
    transform: rotate(360deg);
  }
`

const pincel = keyframes`
  0% {
    transform: translateY(4px);
  }

  50% {
    transform: translateY(-4px);
  }

  100% {
    transform: translateY(4px);
  }
`

const arrowLeft = keyframes`
    0% {
    transform: translateX(2px);
  }

  50% {
    transform: translateX(-2px);
  }

  100% {
    transform: translateX(2px);
  }
`

const arrowRight = keyframes`
  0% {
    transform: translateX(-2px);
  }

  50% {
    transform: translateX(2px);
  }

  100% {
    transform: translateX(-2px);
  }
`

const lineAnimation = keyframes`
  from {  
    transform: translateY(-50%);
    overflow: hidden;
  }

  to {
    transform: translateY(0);
  }
`

const typing = keyframes`
  from {
    width: 0;
  }
` 

const cursor = keyframes`
  50% {
    border-color: transparent;
  }  
`

export const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  padding: 0px 2rem 0px 2rem;
  margin-bottom: 4rem;

  .skills {
    display: flex;
    justify-content: space-between;

    .separator {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      justify-content: space-between;
      margin-right: 3rem;
    }
    
    .line-1, .line-2, .line3 {
      animation: ${lineAnimation} 1.5s linear ;
      border: 1px solid ${props => props.theme['orange-400']};
      height: 4rem;
      width: 2px;
    }

    span {
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background-color: ${props => props.theme['orange-400']};
    }

    .hard-skills {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .content {
      display: flex;
      align-items: center;
      gap: 2rem;
      min-width: 20rem;

      strong {
       color: ${props => props.theme['gray-300']};
      }

      .separatorArrow {
        display: flex;
        align-items: center;
        margin-left: -15px;
        margin-right: -15px;
      }

      .gear {
        animation: ${gear} 15s linear infinite;
        cursor: pointer;
        color: #D4D4D8;
      }

      .pincel {
        animation: ${pincel} 5s linear infinite;
        cursor: pointer;
        color: #EF8AAD;
      }

      .arrowLeft {
        animation: ${arrowLeft} 5s linear infinite;
        cursor: pointer;
        color: ${props => props.theme['orange-400']};
      }

      .arrowRight {
        animation: ${arrowRight} 5s linear infinite;
        cursor: pointer;
        color: ${props => props.theme['orange-400']};
    }
  }
  }

  .about {
    h1 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 1.8rem;
      margin-top: 2rem;
      color: ${props => props.theme['gray-100']};
    }

    p {
      color: ${props => props.theme['gray-300']};
      margin: 0rem 0px 2.5rem 0px;
      text-align: justify;
    }

    .separator-card {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .card {
        display: flex;
        flex-direction: column;
        min-width: 105px;
        gap: 0.70rem;

        strong {
          position: relative;
          font-size: 2rem;
          color: ${props => props.theme['gray-100']};
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          animation: ${typing} 1s steps(15), 
          ${cursor} 1s step-end infinite ;
        }
        

        strong::after {
          content: '+';
          position: absolute;
          margin-left: 8px;
          color: ${props => props.theme['orange-400']};
        }

        span {
          color: ${props => props.theme['gray-300']};
        }
      }
    }
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    .about {
      margin-bottom: 5rem;
    }
  }

  @media (max-width: 425px) {
    .skills {
      justify-content: center;
      gap: 3rem;
      padding-left: 4rem;
      margin-bottom: 2rem;

      .separator {
        margin-right: 0rem;
      }
    }
  }

  @media (max-width: 375px) {
    .skills {
      justify-content: center;
      gap: 1.7rem;
      padding-left: 4rem;
      margin-bottom: 2rem;
    }
  }
`