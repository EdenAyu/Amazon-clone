import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: 'https://us-central1-aug-bc35b.cloudfunctions.net/api',
  baseURL:'https://us-central1-clone-75037.cloudfunctions.net/api'
});

export default instance;
