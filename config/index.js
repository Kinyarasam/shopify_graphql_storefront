import dotenv from 'dotenv'

/**
 * Load the environment variables.
 */
dotenv.config();

const config = {};
config.PORT = process.env.PORT;

config.STOREFRONT_ACCESS_TOKEN = process.env.STOREFRONTACCESSTOKEN;
config.SHOP_URL = process.env.SHOPURL;
config.SHOPIFY_API_KEY = process.env.SHOPIFYAPIKEY;
config.SHOPIFY_SCOPES = process.env.SHOPIFYSCOPES.split(', ')
config.SHOPIFY_API_SECRET = process.env.SHOPIFYAPISECRET;

export default config;
