import styled, { keyframes } from "styled-components";

const icons = keyframes`
  from {
    transform: translateY(50%);
  }
`
const iconsAnimation = keyframes`
  from {
    transform: translateY(50%);
  }
`

const importconsAnimationsUniFECAF = keyframes`
  from {
    transform: translateY(50%);
  }
`

export const ContainerFooter = styled.div`
  animation: ${icons} 900ms linear;

`

export const IconsAnimationsRocketseat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  animation: ${iconsAnimation} 400ms linear;
`

export const IconsAnimationsUniFECAF = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  animation: ${importconsAnimationsUniFECAF} 600ms linear;
`