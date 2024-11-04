// src/firebaseOperations.js
import { db } from './firebase';
import { collection, doc, getDocs, updateDoc, setDoc, getDoc } from 'firebase/firestore';

// コレクションの参照を取得（「pesticides」というコレクションを作成します）
const pesticidesCollection = collection(db, 'pesticides');

// データを取得する関数
export const getPesticideData = async () => {
  const snapshot = await getDocs(pesticidesCollection);
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

// データを更新する関数
export const updatePesticideData = async (id, updatedData) => {
  const pesticideDoc = doc(pesticidesCollection, id);
  await updateDoc(pesticideDoc, updatedData);
};

// 新しいデータを追加する関数（初回のみ使用）
export const addPesticideData = async (id, data) => {
  const pesticideDoc = doc(pesticidesCollection, id);
  await setDoc(pesticideDoc, data);
};

export const updateQuantity = async (id, newQuantity) => {
  const pesticideDoc = doc(db, 'pesticides', id);
  await updateDoc(pesticideDoc, { quantity: newQuantity });
};

export const getQuantity = async (productId) => {
  try {
    const productRef = doc(db, 'pesticides', productId); // dbを使ってドキュメント参照を作成
    const docSnapshot = await getDoc(productRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return data.quantity; // quantityフィールドを返す
    } else {
      console.error('No such document!');
      return null; // ドキュメントが存在しない場合はnullを返す
    }
  } catch (error) {
    console.error('Error getting quantity:', error);
    throw error; // エラーが発生した場合はthrowで外部にエラーを返す
  }
};
