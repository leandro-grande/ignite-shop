import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import styled from "styled-components";

export const CartContent = styled(motion(Dialog.Content))`
  height: 100vh;
  width: 480px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  padding: 3rem;
  
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color_gray800};
  box-shadow: -4px 0px 30px rgba(0, 0, 0, 0.8);

  h2 {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 160%;
    color: ${props => props.theme.color_gray100};
  }
`;

export const CartCloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  background: transparent;
  color: ${props => props.theme.color_gray300}; 
  cursor: pointer;
`;

export const Badge = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  background-color: ${props => props.theme.color_green500};
  color: ${props => props.theme.color_white};
  border: 3px solid ${props => props.theme.color_gray900}; 
  
  font-size: 0.875rem;
  font-weight: 700;
  position: absolute;
  top: -0.875rem;
  right: -0.875rem;

  display: flex;
  align-items: center;
  justify-content:center; 
`;

export const CartProduct = styled.ul`
  margin-top: 2rem;
  list-style: none;
    
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  li {
      display: flex;
      gap: 1.25rem;

      img {
        background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);
        border-radius: 8px;
      }

      > div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        
        span {
          font-size: 1.125rem;
          color: ${props => props.theme.color_gray100};
          line-height: 160%;
        }

        strong {
          font-size: 1.125rem;
        }

        button {
          font-size: 1.125rem;
          line-height: 160%;
          background-color: transparent;
          border: 0;
          color: ${props => props.theme.color_green500};
          font-weight: 700;
          cursor: pointer;

          margin-top: auto;
        }
      }
    }

`;

export const CartFinalization = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 1.125rem;
      color: ${props => props.theme.color_gray300};
    }

    &:last-child {
      font-weight: 700;

      span {
        font-size: 1.125rem;
      }
      
      p {
        color: ${props => props.theme.color_green300};
        font-size: 2rem;
      }
    }

  }

  button {
    margin-top: 2rem;
    padding: 1.25rem;
    border: 0;
    border-radius: 8px;
    background-color: ${props => props.theme.color_green500};
    color: ${props => props.theme.color_white};
    font-size: 1.125rem;
    cursor: pointer;
    transition: background 0.2s;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:not(:disabled):hover {
      background: ${props => props.theme.color_green300};
    }
  }
  
`;
