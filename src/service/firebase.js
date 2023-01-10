//VER SIEMPRE DOCUMENTACION VERSION 9!!

// 1) Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// 3) importo getFirestore desde firebase
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbHW_PJLFPZVhcMYFZqFgW_Q5sFx8d0jo",
  authDomain: "shibe-s-shop.firebaseapp.com",
  projectId: "shibe-s-shop",
  storageBucket: "shibe-s-shop.appspot.com",
  messagingSenderId: "57291704363",
  appId: "1:57291704363:web:1cbccf50a371dd0fea426e",
};

// 2) Inicializo firebase
const app = initializeApp(firebaseConfig);

// 4) inicilizo mi DB
const DB = getFirestore(app);

export async function getSingleItem(itemID) {
  //hago una referencia a mi bd y mi documento
  let docRef = doc(DB, "productos", itemID);

  //obtengo la respuesta asincrona de getDoc
  let docSnapshot = await getDoc(docRef);

  let item = docSnapshot.data();
  item.id = docSnapshot.id;

  return item;
}

export async function getItems() {
  const collectionRef = collection(DB, "productos");
  let docsSnapshot = await getDocs(collectionRef);

  let docsArray = docsSnapshot.docs;
  let dataDocs = docsArray.map((doc) => {
    let item = doc.data();
    item.id = doc.id;
    return item;
  });

  return dataDocs;
}

export async function getItemsCategory(categoryID) {
  const collectionRef = collection(DB, "productos");

  let q = query(collectionRef, where("category", "==", categoryID));

  let docsSnapshot = await getDocs(q);

  let docsArray = docsSnapshot.docs;
  let dataDocs = docsArray.map((doc) => {
    let item = doc.data();
    item.id = doc.id;
    return item;
  });

  return dataDocs;
}

export async function createBuyOrder(orden) {
  const collectionRef = collection(DB, "orders");

  let newOrder = await addDoc(collectionRef,orden)

  return newOrder
}
