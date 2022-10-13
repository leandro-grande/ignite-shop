import useEmblaCarousel from 'embla-carousel-react';
import { GetStaticProps } from 'next';
import Image from 'next/future/image';
import Link from 'next/link';
import { Handbag } from 'phosphor-react';
import { useEffect, useState } from 'react';
import Stripe from 'stripe';

import { HomeContainer, Product, SliderContainer } from "../../styles/pages/home";
import { IProduct } from '../@types/Product';
import { ProductSkeleton } from '../components/ProductsSkeleton';
import { useCart } from '../contexts/useCart';
import { stripe } from '../lib/stripe';


type HomeProps = {
  products: IProduct[];
}

const Home = ({ products }: HomeProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();
  const [ emlbaRef ] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 2000)

    return () => clearTimeout(timeOut);
  }, [])
  
  return (
    <div style={{overflow: 'hidden', width: '100%'}}>
      <HomeContainer>
        {isLoading ? (
          <>
            <ProductSkeleton className="embla__slide" />
            <ProductSkeleton className="embla__slide"/>
            <ProductSkeleton className="embla__slide"/>
          </>
        ) : (
          <div ref={emlbaRef} className="embla">
            <SliderContainer  className="embla__container container">
            {products.map(product => (
              <Product key={product.id} className="embla__slide">
                <Link href={`/product/${product.id}`} >
                  <Image src={product.imageUrl} alt="" width={520} height={480} />
                </Link>
                
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button type='button' onClick={() => addToCart(product)}>
                    <Handbag size={32} color='#FFFFFF' />
                  </button>
                </footer>
              </Product>     
            ))}
          </SliderContainer>
          </div>
        )}
      </HomeContainer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'] // preço
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceInNumber: price.unit_amount / 100,
      price: formattedPrice,
      description: product.description,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
  }

}

export default Home
