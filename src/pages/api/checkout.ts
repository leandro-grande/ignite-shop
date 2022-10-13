import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../@types/Product";
import { stripe } from "../../lib/stripe";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { products } = request.body as {products: IProduct[]};

  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed.' })
  }

  if (!products) {
    return response.status(400).json({ message: 'Products not found.' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`; 
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: products.map(product => ({
      price: product.defaultPriceId,
      quantity: 1,
    }))
  })

  return response.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}

export default handler;