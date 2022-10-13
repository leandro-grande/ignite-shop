import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Link from "next/link";
import Stripe from "stripe";
import { ImageContainer, ImagesContainer, SuccessContainer } from "../../../styles/pages/success";
import { stripe } from "../../lib/stripe";

type SuccessProps = {
  customerName: string;
  productsImages: string[];
}

const Success = ({ customerName, productsImages }: SuccessProps) => {
  return (
    <SuccessContainer>
      <ImagesContainer>
        {productsImages.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image} width={120} height={110} alt="" />
          </ImageContainer>
        ))}
      </ImagesContainer>
      
      <h1>Compra Efetuada!</h1>
      
      <p>
        Uhuul <strong>{customerName}</strong>, sua compra de {" "} 
        {productsImages.length} camisetas já está a caminho da sua casa. 
      </p>

      <Link href='/'>
        Voltar ao catalogo
      </Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sessionId = ctx.query.session_id as string;

  if (!sessionId) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name;
  const productsImages = session.line_items.data.map(item => {
    const product = item.price.product as Stripe.Product;
    return product.images[0];
  })


  return {
    props: {
      customerName,
      productsImages,
    }
  }

}

export default Success;