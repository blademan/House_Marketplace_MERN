import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAfi1e78hJ2oe3QiyD1okailtLKP9ri80I',
  authDomain: 'house-marketplace-app-9c665.firebaseapp.com',
  projectId: 'house-marketplace-app-9c665',
  storageBucket: 'house-marketplace-app-9c665.appspot.com',
  messagingSenderId: '595270196155',
  appId: '1:595270196155:web:0ae824d3ab17e581a2029e',
};

// Initialize Firebase
export const db = getFirestore();
