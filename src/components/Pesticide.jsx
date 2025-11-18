import React, { useEffect, useState } from 'react';
import { getQuantity, updateQuantity } from '../firebaseOperation';

const Pesticide = () => {
  const [quantity, setQuantity] = useState(null); // 
  const [quantity1, setQuantity1] = useState(null); //
  const [quantity2, setQuantity2] = useState(null); //
  const [used, setUsed] = useState(0); // 初期値は0
  const [used1, setUsed1] = useState(0); // 初期値は0
  const [used2, setUsed2] = useState(0); // 初期値は0
  
  const unitPrice = 18000; // 単価
  const unitPrice1 = 21000; // 単価
  const unitPrice2 = 12000; // 単価
  const productId = '1'; // FirestoreのドキュメントIDに合わせて指定する
  const productId2 = '2'; // FirestoreのドキュメントIDに合わせて指定する
  const productId3 = '3'; // FirestoreのドキュメントIDに合わせて指定する

  useEffect(() => {
    const fetchQuantities = async () => {
      try {
        const initialQuantity = await getQuantity(productId);
        const initialQuantity1 = await getQuantity(productId2);
        const initialQuantity2 = await getQuantity(productId3);
        
        setQuantity(initialQuantity || 0); // Set quantity to fetched data or 0 if null
        setQuantity1(initialQuantity1 || 0); 
        setQuantity2(initialQuantity2 || 0); 
      } catch (error) {
        console.error("Error fetching quantities:", error);
      }
    };
    fetchQuantities();
  }, []); 

  const handleIncrement = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    await updateQuantity(productId, newQuantity); // Firestoreに更新
  };

  const handleDecrement = async () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      await updateQuantity(productId, newQuantity); // Firestoreに更新
    }
  };
 
  const handleUsedIncrement = () => {
    setUsed(prevUsed => prevUsed + 1);
  };

  const handleUsedDecrement = () => {
    if (used > 0) {
      setUsed(prevUsed => prevUsed - 1);
    }
  };

  const handleSaveUsed = async () => {
    const newQuantity = quantity - used;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      setUsed(0); // 使用量をリセット
      await updateQuantity(productId, newQuantity); // Firestoreに更新
    } else {
      alert('使用量が在庫を超えています');
    }
  };


  const handleIncrement1 = async () => {
    const newQuantity1 = quantity1 + 1;
    setQuantity1(newQuantity1);
    await updateQuantity(productId2, newQuantity1); // Firestoreに更新
  };

  const handleDecrement1 = async () => {
    if (quantity1 > 0) {
      const newQuantity1 = quantity1 - 1;
      setQuantity1(newQuantity1);
      await updateQuantity(productId2, newQuantity1); // Firestoreに更新
    }
  };
 
  const handleUsedIncrement1 = () => {
    setUsed1(prevUsed => prevUsed + 1);
  };

  const handleUsedDecrement1 = () => {
    if (used1 > 0) {
      setUsed1(prevUsed => prevUsed - 1);
    }
  };

  const handleSaveUsed1 = async () => {
    const newQuantity1 = quantity1 - used1;
    if (newQuantity1 >= 0) {
      setQuantity1(newQuantity1);
      setUsed1(0); // 使用量をリセット
      await updateQuantity(productId2, newQuantity1); // Firestoreに更新
    } else {
      alert('使用量が在庫を超えています');
    }
  };

  const handleIncrement2 = async () => {
    const newQuantity2 = quantity2 + 1;
    setQuantity2(newQuantity2);
    await updateQuantity(productId3, newQuantity2); // Firestoreに更新
  };

  const handleDecrement2 = async () => {
    if (quantity2 > 0) {
      const newQuantity2 = quantity2 - 1;
      setQuantity2(newQuantity2);
      await updateQuantity(productId3, newQuantity2); // Firestoreに更新
    }
  };
 
  const handleUsedIncrement2 = () => {
    setUsed2(prevUsed => prevUsed + 1);
  };

  const handleUsedDecrement2 = () => {
    if (used2 > 0) {
      setUsed2(prevUsed => prevUsed - 1);
    }
  };

  const handleSaveUsed2 = async () => {
    const newQuantity2 = quantity2 - used2;
    if (newQuantity2 >= 0) {
      setQuantity2(newQuantity2);
      setUsed2(0); // 使用量をリセット
      await updateQuantity(productId3, newQuantity2); // Firestoreに更新
    } else {
      alert('使用量が在庫を超えています');
    }
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">農薬在庫</h2>

        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          <div className="py-5 sm:py-8">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div className="sm:-my-2.5">
                <img src="/img/スクリーンショット 2024-10-25 14.10.23.png" alt="パワーカイザー" className="w-24 h-40 sm:w-56 sm:h-72 object-cover rounded-lg bg-gray-100" />
              </div>
              
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">ラクサー</a>
                  <span className="block text-gray-500">Size: 5ℓ</span>
                </div>

                <div className="mt-4">
                  <table className="table-auto w-full text-sm text-left text-gray-800">
                    <tbody>
                      <tr>
                        <td className="py-1 font-bold">希釈倍数・使用量</td>
                        <td className="py-1">800mL/10a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用時期</td>
                        <td className="py-1">は種後出芽前</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用回数</td>
                        <td className="py-1">1回</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用方法</td>
                        <td className="py-1">全面土壌散布</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">残りℓ数</td>
                        <td className="py-1">{quantity * 5}</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用可能面積</td>
                        <td className="py-1">{(quantity * 500 / 8 ). toFixed(1)}a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">値段</td>
                        <td className="py-1">{unitPrice}円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="text-sm font-bold text-gray-700 mb-1">残り</div>
                  <div className="flex h-12 w-24 overflow-hidden rounded border bg-gray-50 shadow-sm">
                    <div className="w-full px-4 py-2 text-center outline-none">{quantity}</div>
                    <div className="flex flex-col divide-y border-l">
                      <button onClick={handleIncrement} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">+</button>
                      <button onClick={handleDecrement} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">-</button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 mt-4">
                  <div className="text-sm font-bold text-gray-700 mb-1">使用</div>
                  <div className="flex h-12 w-24 overflow-hidden rounded border bg-gray-50 shadow-sm">
                    <div className="w-full px-4 py-2 text-center outline-none">{used}</div>
                    <div className="flex flex-col divide-y border-l">
                      <button onClick={handleUsedIncrement} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">+</button>
                      <button onClick={handleUsedDecrement} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">-</button>
                    </div>
                  </div>
                  <button onClick={handleSaveUsed} className="mt-2 inline-block rounded-lg bg-blue-500 px-4 py-1 text-sm font-semibold text-white transition duration-100 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 active:bg-blue-700">
                    保存
                  </button>
                </div>
                
                <span className="font-bold text-gray-800 md:text-lg">合計: ¥{(unitPrice * quantity).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          <div className="py-5 sm:py-8">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div className="sm:-my-2.5">
                <img src="/img/スクリーンショット 2024-11-04 18.17.40.png" className="w-24 h-40 sm:w-56 sm:h-72 object-cover rounded-lg bg-gray-100" />
              </div>
              
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">ブラシンフロアブル</a>
                  <span className="block text-gray-500">Size: 5ℓ</span>
                </div>

                <div className="mt-4">
                  <table className="table-auto w-full text-sm text-left text-gray-800">
                    <tbody>
                      <tr>
                        <td className="py-1 font-bold">希釈倍数・使用量</td>
                        <td className="py-1">8倍・800mL/10a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用時期</td>
                        <td className="py-1">収穫7日前まで</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用回数</td>
                        <td className="py-1">2回以内</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用方法</td>
                        <td className="py-1">ドローン</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">残りℓ数</td>
                        <td className="py-1">{quantity1 * 5}</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用可能面積</td>
                        <td className="py-1">{quantity1 * 50}a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">値段</td>
                        <td className="py-1">{unitPrice1}円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="text-sm font-bold text-gray-700 mb-1">残り</div>
                  <div className="flex h-12 w-24 overflow-hidden rounded border bg-gray-50 shadow-sm">
                    <div className="w-full px-4 py-2 text-center outline-none">{quantity1}</div>
                    <div className="flex flex-col divide-y border-l">
                      <button onClick={handleIncrement1} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">+</button>
                      <button onClick={handleDecrement1} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">-</button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 mt-4">
                  <div className="text-sm font-bold text-gray-700 mb-1">使用</div>
                  <div className="flex h-12 w-24 overflow-hidden rounded border bg-gray-50 shadow-sm">
                    <div className="w-full px-4 py-2 text-center outline-none">{used1}</div>
                    <div className="flex flex-col divide-y border-l">
                      <button onClick={handleUsedIncrement1} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">+</button>
                      <button onClick={handleUsedDecrement1} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">-</button>
                    </div>
                  </div>
                  <button onClick={handleSaveUsed1} className="mt-2 inline-block rounded-lg bg-blue-500 px-4 py-1 text-sm font-semibold text-white transition duration-100 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 active:bg-blue-700">
                    保存
                  </button>
                </div>
                
                <span className="font-bold text-gray-800 md:text-lg">合計: ¥{(unitPrice1 * quantity1).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          <div className="py-5 sm:py-8">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div className="sm:-my-2.5">
                <img src="/img/スクリーンショット 2024-11-04 18.17.40.png" className="w-24 h-40 sm:w-56 sm:h-72 object-cover rounded-lg bg-gray-100" />
              </div>
              
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">ハーモニー</a>
                  <span className="block text-gray-500">Size: 50g</span>
                </div>

                <div className="mt-4">
                  <table className="table-auto w-full text-sm text-left text-gray-800">
                    <tbody>
                      <tr>
                        <td className="py-1 font-bold">希釈倍数・使用量</td>
                        <td className="py-1">8倍・800mL/10a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用時期</td>
                        <td className="py-1">収穫7日前まで</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用回数</td>
                        <td className="py-1">2回以内</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用方法</td>
                        <td className="py-1">ドローン</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">残りℓ数</td>
                        <td className="py-1">{quantity2 * 5}</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用可能面積</td>
                        <td className="py-1">{quantity2 * 50}a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">値段</td>
                        <td className="py-1">{unitPrice2}円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="text-sm font-bold text-gray-700 mb-1">残り</div>
                  <div className="flex h-12 w-24 overflow-hidden rounded border bg-gray-50 shadow-sm">
                    <div className="w-full px-4 py-2 text-center outline-none">{quantity2}</div>
                    <div className="flex flex-col divide-y border-l">
                      <button onClick={handleIncrement2} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">+</button>
                      <button onClick={handleDecrement2} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">-</button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 mt-4">
                  <div className="text-sm font-bold text-gray-700 mb-1">使用</div>
                  <div className="flex h-12 w-24 overflow-hidden rounded border bg-gray-50 shadow-sm">
                    <div className="w-full px-4 py-2 text-center outline-none">{used2}</div>
                    <div className="flex flex-col divide-y border-l">
                      <button onClick={handleUsedIncrement2} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">+</button>
                      <button onClick={handleUsedDecrement2} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">-</button>
                    </div>
                  </div>
                  <button onClick={handleSaveUsed2} className="mt-2 inline-block rounded-lg bg-blue-500 px-4 py-1 text-sm font-semibold text-white transition duration-100 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 active:bg-blue-700">
                    保存
                  </button>
                </div>
                
                <span className="font-bold text-gray-800 md:text-lg">合計: ¥{(unitPrice2 * quantity2).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        

        <div className="flex flex-col items-end gap-4">
          <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
            <div className="flex items-start justify-between text-gray-800">
              <span className="text-lg font-bold">合計金額</span>
              <span className="text-lg font-bold">¥{((unitPrice * quantity) + (unitPrice1 * quantity1) + (unitPrice2 * quantity2)).toLocaleString()}</span>
            </div>
          </div>
          <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white transition duration-100 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 active:bg-indigo-700 md:text-base">
            更新
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pesticide;
