import styled from "styled-components";

export const SuccessContainer = styled.div`
  height: 656px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    color: ${props => props.theme.color_gray100};
  }

  p {
    margin-top: 2rem;
    max-width: 560px;
    font-size: 1.5rem;
    color: ${props => props.theme.color_gray300};
    line-height: 140%;
    text-align: center;
  }

  a {
    display: block;
    margin-top: 5rem;
    font-size: 1.125rem;
    text-decoration: none;
    color: ${props => props.theme.color_green500};
    font-weight: 700;

    &:hover {
      color: ${props => props.theme.color_green300};
    }
  }
`

export const ImagesContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  div + div {
    margin-left: calc(-148px / 2);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);
  border-radius: 50%;
  box-shadow: 0px 0px 60px rgba(0,0,0,0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`;