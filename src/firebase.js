// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB42bl0Szsy194MczuXFr-VnEyjg3ruoF8",
  authDomain: "e-comerce-47846.firebaseapp.com",
  projectId: "e-comerce-47846",
  storageBucket: "e-comerce-47846.firebasestorage.app",
  messagingSenderId: "671977207722",
  appId: "1:671977207722:web:b0322e40594338ba49ddd3",
  measurementId: "G-3EPD7SEJV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase

const db = getFirestore(app);

//obtener un producto
export async function getSingleProduct(id) {
  const documentRef = doc(db, 'products', id);

  try {
    const snapshot = await getDoc(documentRef);
    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      console.log('El documento no existe!');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

//obtener toda una coleccion
export async function getProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
      });
      return productsList;
    } else {
      console.log('Coleccion vacía !');
    }
  } catch (error) {
    console.error('Error al obtener la coleccion: ', error);
  }
}

//filtros de precio
export async function filterProductsByPrice(price) {
  try {
    const filteredQuery = query(
      collection(db, 'products'),
      where('price', '<', price)
    );
    const querySnapshot = await getDocs(filteredQuery);
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
      });
      return productsList;
    } else {
      console.log('Coleccion vacía !');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

//agregar
export async function sendOrder(order){
const ordersCollection = collection(db, 'orders')
try{
  const docRef = await addDoc(ordersCollection,order);
  return docRef.id;
}catch(error){
console.error('Error al agregar el documento nuevo', error)
}

}