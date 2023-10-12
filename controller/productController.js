#!/usr/bin/env node

import shopify from "../config/shopify";
import config from "../config";

const client = new shopify.clients.Graphql({
  session: {
    accessToken: config.SHOPIFY_ACCESS_TOKEN,
    shop: config.SHOP_URL,
    apiKey: config.SHOPIFY_API_KEY,
    apiSecretKey: config.SHOPIFY_API_SECRET,
  },
  apiVersion: config.SHOPIFY_API_VERSION,
});

class ProductController {
  static async getProducts(req, res) {
    try {
      const response = await client.query({data: `{
        products (first: 250) {
          edges {
            node {
              id
              title
              description
            }
          }
        }
      }`})
  
      console.log(response.body.data.products.edges)
      return res.status(200).json(response.body.data.products.edges)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

  static async getCollections(req, res) {
    try {
      const response = await client.query({
        data: `{
        collections (first: 250) {
          edges {
            node {
              id
              title
              description
            }
          }
        }
      }` });

      console.log(response.body.data.collections.edges);
      return res.status(200).json(response.body.data.collections.edges);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}

export default ProductController;
