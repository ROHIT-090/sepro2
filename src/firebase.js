import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBXFPpVdl0Sc059xnqM5MWSLqBBkacQdjo",
  authDomain: "tpsample-e2d9c.firebaseapp.com",
  databaseURL: "https://tpsample-e2d9c-default-rtdb.firebaseio.com",
  projectId: "tpsample-e2d9c",
  storageBucket: "tpsample-e2d9c.appspot.com",
  messagingSenderId: "733951094047",
  appId: "1:733951094047:web:e0dc1108a0b9dea11b942a",
  measurementId: "G-VXNVTN5K6S"
};
 
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  export const auth = app.auth();

  export {db};
  export default app;