import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCY80Fio6Tfrg9gQ9-X7fLGklOWb28MziY",
  authDomain: "myproject-e0389.firebaseapp.com",
  projectId: "myproject-e0389",
  storageBucket: "myproject-e0389.appspot.com",
  messagingSenderId: "920786929538",
  appId: "1:920786929538:web:4799b44798c087608e719b"
};


const app = initializeApp(firebaseConfig);
export const firebase=getFirestore(app)
export const auth=getAuth(app)
