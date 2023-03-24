import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  API_KEY_OMDB: process.env.API_KEY_OMDB,
  URL_OMDB: process.env.URL_OMDB,
};
