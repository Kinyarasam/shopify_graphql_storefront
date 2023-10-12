import dotenv from 'dotenv'

/**
 * Load the environment variables.
 */
dotenv.config();

const config = {};

config.PORT = process.env.PORT;
config.HOST = process.env.HOST

config.STOREFRONT_ACCESS_TOKEN = process.env.STOREFRONT_ACCESS_TOKEN;
config.SHOP_URL = process.env.SHOPURL;
config.SHOPIFY_API_KEY = process.env.SHOPIFYAPIKEY;
config.SHOPIFY_SCOPES = process.env.SHOPIFYSCOPES.split(', ');
config.SHOPIFY_API_SECRET = process.env.SHOPIFYAPISECRET;
config.SHOPIFY_CLIENT_ID = process.env.SHOPIFYPARTNERCLIENTID;
config.SHOPIFY_CLIENT_SECRET = process.env.SHOPIFYPARTNERCLIENTSECRET;
config.SHOPIFY_API_VERSION = process.env.SHOPIFYAPIVERSION;
config.SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFYACCESSTOKEN;

export default config;
