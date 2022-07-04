import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBAE_APIKEY,
  authDomain: 'graphql-explore-poc.firebaseapp.com',
  projectId: 'graphql-explore-poc',
  storageBucket: 'graphql-explore-poc.appspot.com',
  messagingSenderId: '346708988911',
  appId: '1:346708988911:web:29145cbad5287558de1c1a',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
