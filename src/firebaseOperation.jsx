// src/firebaseOperations.js
import { db } from './firebase';
import { collection, doc, getDocs, updateDoc, setDoc } from 'firebase/firestore';

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
