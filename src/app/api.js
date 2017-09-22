import axios from 'axios';
import ROOT_URL from './root_url';

export default axios.create({
  baseURL: ROOT_URL
});
