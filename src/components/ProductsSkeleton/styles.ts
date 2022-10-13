import styled, { keyframes } from "styled-components";

const SkeletonAnimation = keyframes`
   0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const ProductSkekeletonContainer = styled.div`
  width: 696px;
  height: 656px;
  display: grid;
  grid-template-rows: 1fr 32px;
  gap: 1.5rem;

  div {
    display: grid;
    grid-template-columns: 330px 100px;
    justify-content: space-between;
  }

`;

export const SkeletonItem = styled.div`
  animation: ${SkeletonAnimation} 1300ms ease-in-out infinite;
  background-color: ${props => props.theme.color_gray800};
  background-image: linear-gradient(90deg, #202024, #2b2b30, #202024);
  background-size: 200px 100%;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  border-radius: 8px
`;