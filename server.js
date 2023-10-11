import express from 'express';
import config from './config';
import { Shopify, shopifyApi } from '@shopify/shopify-api';
import '@shopify/shopify-api/adapters/node'

const app = express();

const shopify = shopifyApi({
  apiKey: config.SHOPIFY_API_KEY,
  apiSecretKey: config.SHOPIFY_API_SECRET,
  scopes: config.SHOPIFY_SCOPES,
  hostName: `localhost:${config.PORT}`
});

const storefrontClient = new shopify.clients.Storefront({
  session: {
    accessToken: config.STOREFRONT_ACCESS_TOKEN,
    apiKey: config.SHOPIFY_API_KEY,
    apiSecretKey: config.SHOPIFY_API_SECRET,
    shop: config.SHOP_URL,
    scope: config.SHOPIFY_SCOPES
  },
})

const getProducts = async () => {
  try {
    const products = await storefrontClient.query({
      data: `{
        products (first: 3) {
          edges {
            node {
              id
              title
              description
            }
          }
        }
      }`,
    });
  
    return products
  } catch (err) {
    return err.message;
  }
};

getProducts()
  .then((prod) => console.log(prod))
  .catch((err) => console.log(err))


app.listen(config.PORT, () => {
  console.log('Server running on PORT: ', config.PORT)
});

export default app;
