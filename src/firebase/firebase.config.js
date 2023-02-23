import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAHF0_NapjWx_QCf5JpZLXNwQS43TM7hw",
  authDomain: "final-school-project-9826e.firebaseapp.com",
  projectId: "final-school-project-9826e",
  storageBucket: "final-school-project-9826e.appspot.com",
  messagingSenderId: "472125388892",
  appId: "1:472125388892:web:45e512f9221ab497d9ce99"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
