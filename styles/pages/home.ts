import styled from "styled-components";


export const HomeContainer = styled.main`
  min-height: 656px;
  display: flex;
  gap: 3rem;
  width: 100%;
  max-width: calc(100vw - ((100vw - 1180px) / 2));
  margin-left: auto;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin: 0 auto;

  &.embla__slide {
    min-width: 43.5rem;
  }
`;

export const Product = styled.div`
  width: 100%;
  min-height: 656px;
  background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);
  box-shadow: 0px 0px 48px rgba(0, 0, 0, 0.9);
  border-radius: 8px;

  position: relative;
  z-index: 1;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    cursor: pointer;
    object-fit: cover;
  }

  footer {
    position: absolute;
    z-index: 9999;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;

    background: rgba(32, 32, 36, 0.8);
    border-radius: 6px;
    padding: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transform: translateY(110%);
    opacity: 0;
    transition: all 0.2s ease-in-out;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      strong {
        font-size: ${props => props.theme.size_lg};
      }

      span {
        font-size: ${props => props.theme.size_xl};
        font-weight: bold;
        color: ${props => props.theme.color_green300};
      }
    }

    button {
      padding: 0.75rem;
      background-color: ${props=> props.theme.color_green500};
      border: 0;
      border-radius: 8px;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  &:hover footer {
    transform: translateY(0%);
    opacity: 1;
  }
`