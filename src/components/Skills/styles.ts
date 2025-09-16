import styled, { keyframes } from "styled-components";

const infiniteScroll = keyframes`
  to {
    transform: translateX(-100%);
  }
`

export const SkilsContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 4rem;

  div {
    width: 100%;
    .scroll-wrapper {
      display: flex;
      align-items: center;
      width: 200%;
      gap: 2.5rem;
      overflow: hidden;
      padding: 1.5rem 1.5rem 1.5rem 1.5rem;;
      background-color: ${props => props.theme['skils-100']};
      box-shadow: 0px 0px 4px 0px ;
    }
    
    .infinite {
      display: flex;
      justify-content: space-between;
      animation: ${infiniteScroll} 20s linear infinite;
    }

    .scroll {
      display: flex;
      justify-content: space-between;
      animation: ${infiniteScroll} 20s linear infinite;
    }

    .html {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['html']};
      transition:  color 0.3s ease;
      cursor: pointer;
    }

    .html:hover {
      color: #FA7B4B;
    }
    .css {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['css']};
      cursor: pointer;
      transition:  color 0.3s ease;
    }

    .css:hover {
      color: #4A82F7;
    }
    .js {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['js']};
      cursor: pointer;
      transition:  color 0.3s ease;
    }

    .js:hover {
      color: #F7E26B;
    }

    .ts {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['ts']};
      cursor: pointer;
      transition:  color 0.3s ease;
    }

    .ts:hover {
      color: #5591D1;
    }

    .react {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['react']};
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .react:hover {
      color: #A0E3FF;
    }
    .vite {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['vite']};
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .vite:hover {
      color: #969EFF;
    }
    .next {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['next']};
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .next:hover {
      color: #333333;
    }
    .git {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['git']};
      cursor: pointer;
      transition: color 0.3s ease; 
    }

    .git:hover {
      color: #F47B69;
    }
    .github {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['github']};
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .github:hover {
      color: #555555;
    }
    .figma {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['figma']};
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .figma:hover {
      color: #F48A69;
    }
    .tailwind {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['tailwind']};
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .tailwind:hover {
      color: #53DFF5;
    }
    .styled {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme['styled']};
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .styled:hover {
      color: #E6A9B9;
    }
  }

  @media (max-width: 767px) {
    margin-top: 11rem;

    .infinite {
      justify-content: center;
      gap: 2.5rem;
    }

    .scroll {
      justify-content: center;
      gap: 2.5rem;
    }
  }
`