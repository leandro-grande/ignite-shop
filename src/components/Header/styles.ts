import styled from "styled-components";


export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    

    button {
      padding: 0.75rem;
      background: ${props => props.theme.color_gray800};
      border: 0;
      border-radius: 8px;
      cursor: pointer;
      position: relative;

      svg {
        color: ${props => props.theme.color_gray100};
        transition: color 0.2s;
      }

      &:not(:disabled):hover svg {
        color: ${props => props.theme.color_green500};
      } 

      &:disabled {
        cursor: default;
        opacity: 0.7;
      } 
    }
`

