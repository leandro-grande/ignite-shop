import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";

import { motion, Variants } from 'framer-motion';
import { ProductContainer } from "../../../styles/pages/product";
import { IProduct } from "../../@types/Product";
import { useCart } from "../../contexts/useCart";

import { stripe } from "../../lib/stripe";

type ProductProps = {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const { addToCart } = useCart();
  const { isFallback } = useRouter();

 
  if (isFallback) {
    return <p>Carregando....</p>
  }

  const variants: Variants  = {
    initial: {
      x: -70,
      opacity: 0,
    },
    animation: {
      x: 0,
      opacity: 1,
    }
  }
  
  return (
    <ProductContainer>

      <motion.div
        variants={variants}
        transition={{duration: 0.6}}
        initial="initial"
        animate="animation"
      >
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </motion.div>
      
      <section>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button type="button" onClick={() => addToCart(product)}>
          Colocar na Sacola
        </button>
      </section>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await stripe.products.list();

  const paths = products.data.map((product) => {
    return {
      params: { id: product.id }
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const productId = ctx.params.id as string;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price;

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price.unit_amount / 100);

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formattedPrice,
        description: product.description,
        defaultPriceId: price.id,
      }
    }
  }

}

export default Product;