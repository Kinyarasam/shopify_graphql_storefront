#!/usr/bin/env node

import { shopifyApi } from "@shopify/shopify-api";
import '@shopify/shopify-api/adapters/node';
import config from ".";

const shopify = shopifyApi({
  apiKey: config.SHOPIFY_API_KEY,
  apiSecretKey: config.SHOPIFY_API_SECRET,
  scopes: config.SHOPIFY_SCOPES,
  hostName: `${config.HOST}:${config.PORT}`,
  isCustomStoreApp: false,
  callbackPath: '/auth/callback',
});

export default shopify;
