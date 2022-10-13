import styled from "styled-components";


export const ProductContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  div {
    width: 100%;
    height: calc(656px - 0.5rem);
    max-width: 576px;
    background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);
    border-radius: 8px;
    padding: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: cover;
    }
  }

  section {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.5rem;
      color: ${props => props.theme.color_gray300};
    }

    span {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      color: ${props => props.theme.color_green300};
    }

    p {
      margin-top: 2.5rem;
      line-height: 1.875rem;
      font-size: 1.125rem;
      color: ${props => props.theme.color_gray300};
    }

    button {
      margin-top: auto;
      padding: 1.25rem;
      border: 0;
      border-radius: 8px;
      background-color: ${props => props.theme.color_green500};
      color: ${props => props.theme.color_white};
      font-size: 1.125rem;
      cursor: pointer;
      transition: filter 0.2s;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      &:hover:active {
        filter: brightness(0.8);
      }
    }
  }


`