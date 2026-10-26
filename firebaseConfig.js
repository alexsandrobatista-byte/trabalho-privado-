
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAUfFsMEIQfYY3zE-3DgX2NnjeLVRKJzjQ",
  authDomain: "banco-de-dados-b23a6.firebaseapp.com",
  projectId: "banco-de-dados-b23a6",
  storageBucket: "banco-de-dados-b23a6.firebasestorage.app",
  messagingSenderId: "822433975391",
  appId: "1:822433975391:web:de92e3a3a83feddcbe1fea",
  measurementId: "G-25W04P4JREN",
  databaseURL: "https://banco-de-dados-b23a6-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
