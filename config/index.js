import dotenv from 'dotenv'

/**
 * Load the environment variables.
 */
dotenv.config();
const PORT = process.env.PORT;

export default PORT;
