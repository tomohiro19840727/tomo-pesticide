import React, { useState, useEffect } from 'react';
import { getPesticideData, updatePesticideData } from '../firebaseOperation';

import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';



const Practice = () => {
  const initialPesticideData = [
    {
      id: '1',
      name: '殺菌剤',
      category: '殺菌・殺虫剤',
      image: '/img/スクリーンショット 2024-10-15 9.32.46.png',
      price: 10000,
      dilution: '200～300mL/10a',
      sprayAmount: '100リットル/10a',
      usageTiming: '出芽直前～3葉期まで',
      usageFrequency: '1回',
      usageMethod: '雑草茎葉散布又は全面土壌散布',
      quantity: 10,
      used: 0,
    },
    {
      id: '2',
      name: '除草剤',
      category: '除草剤',
      image: '/img/スクリーンショット 2024-10-25 14.10.23.png',
      price: 12000,
      dilution: '1kg/10a',
      sprayAmount: '100リットル/10a',
      usageTiming: '植代後～移植7日前又は移植直後～ノビエ1.5葉期 ただし移植後30日まで',
      usageFrequency: '1回',
      usageMethod: '湛水散布又は無人航空機による散布',
      quantity: 10,
      used: 0,
    },
    {
      id: '3',
      name: 'パワーカイザー',
      category: '除草剤',
      image: '/img/スクリーンショット 2024-10-25 14.06.09.png',
      price: 15000,
      dilution: '200～300mL/10a',
      sprayAmount: '100リットル/10a',
      usageTiming: '出芽直前～3葉期まで',
      usageFrequency: '1回',
      usageMethod: '雑草茎葉散布又は全面土壌散布',
      quantity: 10,
      used: 0,
    },
  ];

  const [pesticideState, setPesticideState] = useState(initialPesticideData);
  const [selectedCategory, setSelectedCategory] = useState('all');


  // const addInitialDataToFirestore = async (initialData) => {
  //   initialData.forEach(async (item) => {
  //     const docRef = doc(db, 'pesticides', item.id);
  //     const docSnap = await getDoc(docRef);
  
  //     // ドキュメントが存在しない場合のみ追加
  //     if (!docSnap.exists()) {
  //       await setDoc(docRef, { quantity: item.quantity, used: item.used });
  //     }
  //   });
  // };
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPesticideData();
      if (data.length > 0) {
        setPesticideState(data);
      } else {
        // await addInitialDataToFirestore(initialPesticideData);  // 初期データを追加
        setPesticideState(initialPesticideData); // 初期データを表示
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPesticideData();
      if (data.length > 0) {
        setPesticideState(data);
      }
    };
    fetchData();
  }, []);

  const handleIncrement = async (index) => {
    const updatedState = pesticideState.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setPesticideState(updatedState);
    await updatePesticideData(pesticideState[index].id, { quantity: updatedState[index].quantity });
  };

  const handleDecrement = async (index) => {
    const updatedState = pesticideState.map((item, i) =>
      i === index && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setPesticideState(updatedState);
    await updatePesticideData(pesticideState[index].id, { quantity: updatedState[index].quantity });
  };

  const handleUsedIncrement = async (index) => {
    if (pesticideState[index].quantity > 0) {
      const updatedState = pesticideState.map((item, i) =>
        i === index ? { ...item, used: item.used + 1, quantity: item.quantity - 1 } : item
      );
      setPesticideState(updatedState);
      await updatePesticideData(pesticideState[index].id, {
        quantity: updatedState[index].quantity,
        used: updatedState[index].used,
      });
    }
  };

  const handleUsedDecrement = async (index) => {
    if (pesticideState[index].used > 0) {
      const updatedState = pesticideState.map((item, i) =>
        i === index ? { ...item, used: item.used - 1, quantity: item.quantity + 1 } : item
      );
      setPesticideState(updatedState);
      await updatePesticideData(pesticideState[index].id, {
        quantity: updatedState[index].quantity,
        used: updatedState[index].used,
      });
    }
  };

  const filteredData =
    selectedCategory === 'all'
      ? pesticideState
      : pesticideState.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        <div className="text-center mb-6 sm:mb-10 lg:mb-16">
          <h2 className="text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">農薬在庫</h2>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 text-lg font-semibold rounded-lg ${
                selectedCategory === 'all' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
              } transition duration-100 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              全て
            </button>
            <button
              onClick={() => setSelectedCategory('除草剤')}
              className={`px-6 py-2 text-lg font-semibold rounded-lg ${
                selectedCategory === '除草剤' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
              } transition duration-100 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              除草剤
            </button>
            <button
              onClick={() => setSelectedCategory('殺菌・殺虫剤')}
              className={`px-6 py-2 text-lg font-semibold rounded-lg ${
                selectedCategory === '殺菌・殺虫剤' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
              } transition duration-100 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              殺菌・殺虫剤
            </button>
          </div>
        </div>

        {filteredData.map((item, index) => (
          <div key={item.id} className="mb-5 sm:mb-8">
            <div className="py-5 sm:py-8 border-t sm:border-b">
              <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                <img src={item.image} alt={item.name} className="w-24 h-40 sm:w-56 sm:h-72 object-cover rounded-lg bg-gray-100" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-800 lg:text-xl">{item.name}</p>
                    <span className="block text-gray-500">Size: 5ℓ</span>
                    <p className="mt-4 text-gray-500">価格: ¥{item.price ? item.price.toLocaleString() : 'N/A'}</p>
                  </div>
                  <table className="mt-4 w-full text-sm text-left text-gray-800">
                    <tbody>
                      <tr><td className="py-1 font-bold">希釈倍数・使用量</td><td className="py-1">{item.dilution}</td></tr>
                      <tr><td className="py-1 font-bold">散布液量</td><td className="py-1">{item.sprayAmount}</td></tr>
                      <tr><td className="py-1 font-bold">使用時期</td><td className="py-1">{item.usageTiming}</td></tr>
                      <tr><td className="py-1 font-bold">使用回数</td><td className="py-1">{item.usageFrequency}</td></tr>
                      <tr><td className="py-1 font-bold">使用方法</td><td className="py-1">{item.usageMethod}</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center">
                    <span>残り: {item.quantity}</span>
                    <button onClick={() => handleIncrement(index)} className="ml-2 bg-gray-200 px-2">+</button>
                    <button onClick={() => handleDecrement(index)} className="ml-1 bg-gray-200 px-2">-</button>
                  </div>
                  <div className="flex items-center">
                    <span>使用: {item.used}</span>
                    <button onClick={() => handleUsedIncrement(index)} className="ml-2 bg-gray-200 px-2">使用 +</button>
                    <button onClick={() => handleUsedDecrement(index)} className="ml-1 bg-gray-200 px-2">使用 -</button>
                  </div>
                  <span className="font-bold text-gray-800 md:text-lg">合計: ¥{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice;
