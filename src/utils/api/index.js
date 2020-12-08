import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}api/`,
  headers: {
    'n-hang-si-api': process.env.REACT_APP_API_KEY,
    'Content-Type': 'application/json',
  },
});
