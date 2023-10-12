#!/usr/bin/env node
import shopify from "../config/shopify";

class AuthController {
  static async performOauth(req, res) {
    const { query } = req;

    console.log(query);
    // const shopifyAuthResponse = await shopify.auth.getEmbeddedAppUrl();
    // console.log(shopifyAuthResponse);
  }
}

export default AuthController;
