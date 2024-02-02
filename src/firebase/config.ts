import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCFUFL9l1E75Nnj1Q8TJnZnf9hCoFBTKZk",
  authDomain: "model-airlines-fef16.firebaseapp.com",
  projectId: "model-airlines-fef16",
  storageBucket: "model-airlines-fef16.appspot.com",
  messagingSenderId: "200859992202",
  appId: "1:200859992202:web:a09d2761926e06316c2d73"
};

let fireStore: Firestore;

// Initialize Firebase

try {

  const app = initializeApp(firebaseConfig);
  fireStore = getFirestore(app);
  console.log('Conexion establecida exitosamente')
} catch (error) {
  console.log('Ha ocurrido un error al conectarse a fireStore', error)
}

export { fireStore }