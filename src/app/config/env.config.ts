import 'dotenv/config';

export const {
  PORT: port,
  MONGO_URI: mongo_uri,
  NODE_ENVIRONMENT: node_env,
} = process.env;
