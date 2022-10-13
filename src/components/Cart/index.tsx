import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/future/image';
import { Handbag, X } from 'phosphor-react';
import { useState } from "react";

import { useCart } from "../../contexts/useCart";
import { Badge, CartCloseButton, CartContent, CartFinalization, CartProduct } from './styles';


export const Cart = () => {
  const { cart, removeToCart } = useCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession ] = useState(false);

  const hasCart = cart.length > 0;

  const cartTotal = cart.reduce((acc, product) => {
    acc += product.priceInNumber;

    return acc;
  }, 0);

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(cartTotal);



  const handleBuyProduct = async () => {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        products: cart
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      // Conectar com a ferramenta de observabilidade (Datadog /Sentry)
      console.log(err);
      setIsCreatingCheckoutSession(false);
    } 
  }

  const parentVariants: Variants = {
    hidden: {
      x: 600,
    },
    visible: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5
      },
    }
  }

  const childrenVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }



  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type='button' disabled={!hasCart}>
          <Handbag size={24} />
          { hasCart && <Badge>{cart.length}</Badge> }
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>  
        <CartContent variants={parentVariants} initial="hidden" animate="visible">
          <CartCloseButton>
            <X size={24} weight='bold' />
          </CartCloseButton>

          <h2>Sacola de Compras</h2>
         
         
          <CartProduct>
          <AnimatePresence>
            {cart.map(product => (
              <motion.li 
                key={product.id}
                variants={childrenVariants}
                exit={{opacity: 0}}
              >
              <Image src={product.imageUrl} width={102} height={94} alt="" />
              <div>
                <span>{product.name}</span>
                <strong>{product.price}</strong>
                <button onClick={() => removeToCart(product.id) }>Remover</button>
              </div>
            </motion.li>
            ))}
            </AnimatePresence>
          </CartProduct>
          
          <CartFinalization>
            <div>
              <span>Quantidade</span>
              <p>
                {cart.length} {cart.length > 1 ? ' itens': ' item'} 
              </p>
            </div>
            <div>
              <span>Valor total</span>
              <p>{formattedCartTotal}</p>
            </div>

            <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>
              Finalizar
            </button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
