import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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
export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5rem;
  padding-left: 2rem;

  h2 {
    position: relative;
    font-size: 2.25rem; 
    font-weight: 500;
    width: 100%;
    white-space: nowrap; 
    overflow: hidden;
    animation: ${typing} 2.5s steps(22), 
    ${cursor} .4s step-end infinite alternate;
    margin-bottom: 1rem; 
    color: ${props => props.theme['gray-100']};
  }
  h2::after {
    content: '';
    position: absolute;
    bottom: 18%;
    margin-left: 5px;
    height: 8px;
    width: 8px; 
    border-radius: 50%;
    background-color: ${props => props.theme['orange-400']};
  }
  
  strong {
    position: relative;
    font-size: 2rem;
    font-weight: 400;
    padding-left: 25px;
    display: inline-flex;
    align-items: center;
    color: ${props => props.theme['gray-300']};
  }

  strong::before {
    content: '';
    position: absolute;
    left: -50%;
    bottom: 15%;
    height: 2px;
    width: 102px;
    background-color: ${props => props.theme['orange-400']};
  }

  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin: 1.5rem 0 4rem 0;
    border-right: 5px solid ;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation: ${typing} 2.5s steps(22), 
    ${cursor} .4s step-end infinite alternate;
    color: ${props => props.theme['gray-100']};
  }

  .myResume {
    display: flex;
    gap: 1rem;
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img {
      position: absolute;
      width: 250px;
      margin-top: -80px;
    }
    .dev, .logoReact {
      pointer-events: none;
    }
    .logoReact {
      animation: ${spin} 20s linear infinite;
      margin-top: -150px;
      margin-left: 20px;
      width: 220px;
      filter: drop-shadow(0px 0px 20px #61dafb);
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (max-width: 820px) {
    justify-content: left;
    gap: 15rem;
  }

    @media (min-width: 1120px) {
      .hero {
        .logoReact {
          width: 224px;
        }
      }
  }
`

export const Button = styled.button`
  padding: 15px;
  font-size: 0.80rem;
  border: 1px solid ${props => props.theme['orange-400']};
  background-color: transparent;
  color: ${props => props.theme['gray-100']};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme['orange-400']};
    transition: background-color 1s ease;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme['gray-100']};
  }
`