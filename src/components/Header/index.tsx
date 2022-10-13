import Image from "next/future/image";

import logo from '../../../public/logo.svg';
import { useCart } from "../../contexts/useCart";
import { Cart } from "../Cart";
import { HeaderContainer } from './styles';


export const Header = () => {
  const { cart } = useCart();

  const hasCart = cart.length > 0;

  return (
    <HeaderContainer>
      <Image src={logo} alt="" />
        
      <Cart />
    </HeaderContainer>
  )
}