import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

const produtosRef = collection(db, "produtos");

export async function listarProdutos() {
  const snapshot = await getDocs(produtosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function criarProduto(produto) {
  const docRef = await addDoc(produtosRef, produto);
  return docRef.id;
}

export async function atualizarProduto(id, dados) {
  const produtoDoc = doc(db, "produtos", id);
  await updateDoc(produtoDoc, dados);
}

export async function deletarProduto(id) {
  const produtoDoc = doc(db, "produtos", id);
  await deleteDoc(produtoDoc);
}
