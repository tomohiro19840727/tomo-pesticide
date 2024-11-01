import React, { useState, useEffect } from 'react';
import { getPesticideData, updatePesticideData } from '../firebaseOperation';

const Practice = () => {
  // 初期データとして使用する商品情報
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

  const [pesticideState, setPesticideState] = useState(initialPesticideData); // 初期データを代わりに表示
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Firestoreからデータを取得してセット
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPesticideData();
      setPesticideState(data.length > 0 ? data : initialPesticideData); // データがなければ初期データを使用
    };
    fetchData();
  }, []);

  // 在庫の増減
  const handleIncrement = async (index) => {
    const updatedState = pesticideState.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setPesticideState(updatedState);
    await updatePesticideData(pesticideState[index].id, updatedState[index]);
  };

  const handleDecrement = async (index) => {
    const updatedState = pesticideState.map((item, i) =>
      i === index && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setPesticideState(updatedState);
    await updatePesticideData(pesticideState[index].id, updatedState[index]);
  };

  // 使用量の増減
  const handleUsedIncrement = async (index) => {
    if (pesticideState[index].quantity > 0) {
      const updatedState = pesticideState.map((item, i) =>
        i === index ? { ...item, used: item.used + 1, quantity: item.quantity - 1 } : item
      );
      setPesticideState(updatedState);
      await updatePesticideData(pesticideState[index].id, updatedState[index]);
    }
  };


  const handleUsedDecrement = async (index) => {
    if (pesticideState[index].used > 0) {
      const updatedState = pesticideState.map((item, i) =>
        i === index ? { ...item, used: item.used - 1, quantity: item.quantity + 1 } : item
      );
      setPesticideState(updatedState);
      await updatePesticideData(pesticideState[index].id, updatedState[index]);
    }
  };

  const filteredData =
    selectedCategory === 'all'
      ? pesticideState
      : pesticideState.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 text-lg font-semibold rounded-lg transition duration-100 ${
              selectedCategory === 'all' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
            } hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          >
            全て
          </button>
          <button
            onClick={() => setSelectedCategory('除草剤')}
            className={`px-6 py-2 text-lg font-semibold rounded-lg transition duration-100 ${
              selectedCategory === '除草剤' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
            } hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          >
            除草剤
          </button>
          <button
            onClick={() => setSelectedCategory('殺菌・殺虫剤')}
            className={`px-6 py-2 text-lg font-semibold rounded-lg transition duration-100 ${
              selectedCategory === '殺菌・殺虫剤' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
            } hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          >
            殺菌・殺虫剤
          </button>
        </div>

        {/* 商品情報の表示 */}
        {filteredData.map((item, index) => (
          <div key={item.id} className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
            <div className="py-5 sm:py-8">
              <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-lg font-bold">{item.name}</p>
                    <span className="block text-gray-500">
                      価格: ¥{item.price ? item.price.toLocaleString() : 'N/A'}
                    </span>
                  </div>
                  {/* 残量と使用量管理 */}
                  <div>
                    <span>残り: {item.quantity}</span>
                    <span> 使用: {item.used}</span>
                    <button onClick={() => handleIncrement(index)}>+</button>
                    <button onClick={() => handleDecrement(index)}>-</button>
                    <button onClick={() => handleUsedIncrement(index)}>使用 +</button>
                    <button onClick={() => handleUsedDecrement(index)}>使用 -</button>
                  </div>
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
