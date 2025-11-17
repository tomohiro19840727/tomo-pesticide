import React, { useEffect, useState } from 'react';
import { getQuantity, updateQuantity } from '../firebaseOperation';

const Pesticide = () => {
  const [quantity, setQuantity] = useState(null);
const [quantity1, setQuantity1] = useState(null);
const [quantity2, setQuantity2] = useState(null);
const [quantity3, setQuantity3] = useState(null);
const [quantity4, setQuantity4] = useState(null);
const [quantity5, setQuantity5] = useState(null);
const [quantity6, setQuantity6] = useState(null);
const [quantity7, setQuantity7] = useState(null);
const [quantity8, setQuantity8] = useState(null);
const [quantity9, setQuantity9] = useState(null);
const [quantity10, setQuantity10] = useState(null);
const [quantity11, setQuantity11] = useState(null);
const [quantity12, setQuantity12] = useState(null);
const [quantity13, setQuantity13] = useState(null);
const [quantity14, setQuantity14] = useState(null);
const [quantity15, setQuantity15] = useState(null);
const [quantity16, setQuantity16] = useState(null);

const [used, setUsed] = useState(0);
const [used1, setUsed1] = useState(0);
const [used2, setUsed2] = useState(0);
const [used3, setUsed3] = useState(0);
const [used4, setUsed4] = useState(0);
const [used5, setUsed5] = useState(0);
const [used6, setUsed6] = useState(0);
const [used7, setUsed7] = useState(0);
const [used8, setUsed8] = useState(0);
const [used9, setUsed9] = useState(0);
const [used10, setUsed10] = useState(0);
const [used11, setUsed11] = useState(0);
const [used12, setUsed12] = useState(0);
const [used13, setUsed13] = useState(0);
const [used14, setUsed14] = useState(0);
const [used15, setUsed15] = useState(0);
const [used16, setUsed16] = useState(0);


const [totalAmount, setTotalAmount] = useState(0); // 合計金額を保持

const unitPrices = [
  18000, 21000, 35000, 35000, 1300, 35000, 35000, 35000, 35000,
  35000, 35000, 35000, 35000, 35000, 35000, 35000,
];

// 商品ごとの数量を配列にまとめる
const quantities = [
  quantity, quantity1, quantity2, quantity3, quantity4, quantity5,
  quantity6, quantity7, quantity8, quantity9, quantity10, quantity11,
  quantity12, quantity13, quantity14, quantity15, quantity16,
];

// 合計金額を計算
useEffect(() => {
  const calculateTotal = () => {
    const total = quantities.reduce((sum, qty, index) => {
      if (qty !== null) {
        return sum + qty * unitPrices[index];
      }
      return sum;
    }, 0);
    setTotalAmount(total);
  };
  calculateTotal();
}, [quantities]); // quantities配列が更新されるたびに再計算

const unitPrice = 18000;
const unitPrice1 = 21000;
const unitPrice2 = 35000;
const unitPrice3 = 35000;
const unitPrice4 = 1300;
const unitPrice5 = 35000;
const unitPrice6 = 35000;
const unitPrice7 = 35000;
const unitPrice8 = 35000;
const unitPrice9 = 35000;
const unitPrice10 = 35000;
const unitPrice11 = 35000;
const unitPrice12 = 35000;
const unitPrice13 = 35000;
const unitPrice14 = 35000;
const unitPrice15 = 35000;
const unitPrice16 = 35000;

const productId = '1';
const productId2 = '2';
const productId3 = '3';
const productId4 = '4';
const productId5 = '5';
const productId6 = '6';
const productId7 = '7';
const productId8 = '8';
const productId9 = '9';
const productId10 = '10';
const productId11 = '11';
const productId12 = '12';
const productId13 = '13';
const productId14 = '14';
const productId15 = '15';
const productId16 = '16';


  useEffect(() => {
    const fetchQuantities = async () => {
      try {
        const initialQuantity = await getQuantity(productId);
        const initialQuantity1 = await getQuantity(productId2);
        const initialQuantity2 = await getQuantity(productId3);
        const initialQuantity3 = await getQuantity(productId4
        );
        const initialQuantity4 = await getQuantity(productId5
        );
        
        setQuantity(initialQuantity || 0); // Set quantity to fetched data or 0 if null
        setQuantity1(initialQuantity1 || 0); 
        setQuantity2(initialQuantity2 || 0); 
        setQuantity3(initialQuantity3 || 0); 
        setQuantity4(initialQuantity4 || 0); 
      } catch (error) {
        console.error("Error fetching quantities:", error);
      }
    };
    fetchQuantities();
  }, []); // Runs 

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
    if (used1 > 0) {
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

  const handleIncrement3 = async () => {
    const newQuantity3 = quantity3 + 1;
    setQuantity3(newQuantity3);
    await updateQuantity(productId4, newQuantity3); // Firestoreに更新
  };

  const handleDecrement3 = async () => {
    if (quantity3 > 0) {
      const newQuantity3 = quantity3 - 1;
      setQuantity3(newQuantity3);
      await updateQuantity(productId4, newQuantity3); // Firestoreに更新
    }
  };
 
  const handleUsedIncrement3 = () => {
    setUsed3(prevUsed => prevUsed + 1);
  };

  const handleUsedDecrement3 = () => {
    if (used1 > 0) {
      setUsed3(prevUsed => prevUsed - 1);
    }
  };

  const handleSaveUsed3 = async () => {
    const newQuantity3 = quantity3 - used3;
    if (newQuantity3 >= 0) {
      setQuantity3(newQuantity3);
      setUsed3(0); // 使用量をリセット
      await updateQuantity(productId4, newQuantity3); // Firestoreに更新
    } else {
      alert('使用量が在庫を超えています');
    }
  };


  const handleIncrement4 = async () => {
    const newQuantity4 = quantity4 + 1;
    setQuantity4(newQuantity4);
    await updateQuantity(productId5, newQuantity4); // Firestoreに更新
  };

  const handleDecrement4 = async () => {
    if (quantity4 > 0) {
      const newQuantity4 = quantity4 - 1;
      setQuantity4(newQuantity4);
      await updateQuantity(productId5, newQuantity4); // Firestoreに更新
    }
  };
 
  const handleUsedIncrement4 = () => {
    setUsed4(prevUsed => prevUsed + 1);
  };

  const handleUsedDecrement4 = () => {
    if (used1 > 0) {
      setUsed4(prevUsed => prevUsed - 1);
    }
  };

  const handleSaveUsed4 = async () => {
    const newQuantity4 = quantity4 - used4;
    if (newQuantity4 >= 0) {
      setQuantity4(newQuantity4);
      setUsed4(0); // 使用量をリセット
      await updateQuantity(productId5, newQuantity4); // Firestoreに更新
    } else {
      alert('使用量が在庫を超えています');
    }
  };


  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">農薬在庫</h2>

          <div className="py-5 sm:py-8">
        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div className="sm:-my-2.5">
                <img src="/img/スクリーンショット 2024-10-25 14.10.23.png" alt="パワーカイザー" className="w-24 h-40 sm:w-56 sm:h-72 object-cover rounded-lg bg-gray-100" />
              </div>
              
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">ラクー</a>
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
                <img src="/img/スクリーンショット 2024-11-07 14.25.20.png" className="w-24 h-40 sm:w-56 sm:h-72 object-cover rounded-lg bg-gray-100" />
              </div>
              
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">フェルテラ粒剤</a>
                  <span className="block text-gray-500">Size: 10kg</span>
                </div>

                <div className="mt-4">
                  <table className="table-auto w-full text-sm text-left text-gray-800">
                    <tbody>
                      <tr>
                        <td className="py-1 font-bold">希釈倍数・使用量</td>
                        <td className="py-1">育苗箱 （30×60×3cm、 使用土壌約5 ㍑） 1 箱当り50g</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用時期</td>
                        <td className="py-1">は種時覆土前〜移植当日</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用回数</td>
                        <td className="py-1">1回以内</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用方法</td>
                        <td className="py-1">育苗箱の床土に 均一に混和する、育苗箱の上から 均一に散布する。 </td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">残りキロ数</td>
                        <td className="py-1">{quantity2 * 10}</td>
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

                <div className="flex flex-col mt-4">
          <a
            href="/pdf/22560_QR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-green-500 px-4 py-1 text-sm font-semibold text-white transition duration-100 hover:bg-green-600 focus:ring-2 focus:ring-green-300 active:bg-green-700"
          >
            PDFを見る
          </a>
        </div>
                
                <span className="font-bold text-gray-800 md:text-lg">合計: ¥{(unitPrice2 * quantity2).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          <div className="py-5 sm:py-8">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div className="sm:-my-2.5">
                <img src="/img/スクリーンショット 2024-11-07 14.18.21.png" className="w-24 h-40 sm:w-56 sm:h-72 object-cover rounded-lg bg-gray-100" />
              </div>
              
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">兆ジャンボ</a>
                  <span className="block text-gray-500">Size: 30g</span>
                </div>

                <div className="mt-4">
                  <table className="table-auto w-full text-sm text-left text-gray-800">
                    <tbody>
                      <tr>
                        <td className="py-1 font-bold">希釈倍数・使用量</td>
                        <td className="py-1">300g/10a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用時期</td>
                        <td className="py-1">植代後～移植7日前又は移植直後～ノビエ1.5葉期 ただし、移植後30日まで</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用回数</td>
                        <td className="py-1">1回以内</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用方法</td>
                        <td className="py-1">水田に小包装（パック）のまま投げ入れる</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">残りグラム数</td>
                        <td className="py-1">{quantity3 * 30}</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用可能面積</td>
                        <td className="py-1">{quantity3 * 50}a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">値段</td>
                        <td className="py-1">{unitPrice3}円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="text-sm font-bold text-gray-700 mb-1">残り</div>
                  <div className="flex h-12 w-24 overflow-hidden rounded border bg-gray-50 shadow-sm">
                    <div className="w-full px-4 py-2 text-center outline-none">{quantity3}</div>
                    <div className="flex flex-col divide-y border-l">
                      <button onClick={handleIncrement3} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">+</button>
                      <button onClick={handleDecrement3} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">-</button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 mt-4">
                  <div className="text-sm font-bold text-gray-700 mb-1">使用</div>
                  <div className="flex h-12 w-24 overflow-hidden rounded border bg-gray-50 shadow-sm">
                    <div className="w-full px-4 py-2 text-center outline-none">{used3}</div>
                    <div className="flex flex-col divide-y border-l">
                      <button onClick={handleUsedIncrement3} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">+</button>
                      <button onClick={handleUsedDecrement3} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">-</button>
                    </div>
                  </div>
                  <button onClick={handleSaveUsed3} className="mt-2 inline-block rounded-lg bg-blue-500 px-4 py-1 text-sm font-semibold text-white transition duration-100 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 active:bg-blue-700">
                    保存
                  </button>
                </div>

                <div className="flex flex-col mt-4">
          <a
            href="/pdf/1869-1兆Ｊ.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-green-500 px-4 py-1 text-sm font-semibold text-white transition duration-100 hover:bg-green-600 focus:ring-2 focus:ring-green-300 active:bg-green-700"
          >
            PDFを見る
          </a>
        </div>
                
                <span className="font-bold text-gray-800 md:text-lg">合計: ¥{(unitPrice3 * quantity3).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          <div className="py-5 sm:py-8">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div className="sm:-my-2.5">
                <img src="/img/スクリーンショット 2024-11-07 14.11.29.png" className="w-24 h-40 sm:w-56 sm:h-72 object-cover rounded-lg bg-gray-100" />
              </div>
              
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">兆粒剤</a>
                  <span className="block text-gray-500">Size: 1kg</span>
                </div>

                <div className="mt-4">
                  <table className="table-auto w-full text-sm text-left text-gray-800">
                    <tbody>
                      <tr>
                        <td className="py-1 font-bold">希釈倍数・使用量</td>
                        <td className="py-1">1kg/10a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用時期</td>
                        <td className="py-1">植代後～移植7日前又は移植直後～ﾉﾋﾞｴ1.5葉期 ただし移植後30日まで</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用回数</td>
                        <td className="py-1">1回以内</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用方法</td>
                        <td className="py-1">ドローン</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">残りℓ数</td>
                        <td className="py-1">{quantity4 * 5}</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用可能面積</td>
                        <td className="py-1">{quantity4 * 50}a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">値段</td>
                        <td className="py-1">{unitPrice4}円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="text-sm font-bold text-gray-700 mb-1">残り</div>
                  <div className="flex h-12 w-24 overflow-hidden rounded border bg-gray-50 shadow-sm">
                    <div className="w-full px-4 py-2 text-center outline-none">{quantity4}</div>
                    <div className="flex flex-col divide-y border-l">
                      <button onClick={handleIncrement4} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">+</button>
                      <button onClick={handleDecrement4} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">-</button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 mt-4">
                  <div className="text-sm font-bold text-gray-700 mb-1">使用</div>
                  <div className="flex h-12 w-24 overflow-hidden rounded border bg-gray-50 shadow-sm">
                    <div className="w-full px-4 py-2 text-center outline-none">{used4}</div>
                    <div className="flex flex-col divide-y border-l">
                      <button onClick={handleUsedIncrement4} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">+</button>
                      <button onClick={handleUsedDecrement4} className="flex w-6 items-center justify-center bg-gray-200 transition duration-100 hover:bg-gray-300 active:bg-gray-400">-</button>
                    </div>
                  </div>
                  <button onClick={handleSaveUsed4} className="mt-2 inline-block rounded-lg bg-blue-500 px-4 py-1 text-sm font-semibold text-white transition duration-100 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 active:bg-blue-700">
                    保存
                  </button>
                </div>
                
                <div className="flex flex-col mt-4">
          <a
            href="/pdf/1868兆１キロ粒.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-green-500 px-4 py-1 text-sm font-semibold text-white transition duration-100 hover:bg-green-600 focus:ring-2 focus:ring-green-300 active:bg-green-700"
          >
            PDFを見る
          </a>
        </div>

                <span className="font-bold text-gray-800 md:text-lg">合計: ¥{(unitPrice4 * quantity4).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        

        <div className="flex flex-col items-end gap-4">
          <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
            <div className="flex items-start justify-between text-gray-800">
              <span className="text-lg font-bold">合計金額</span>
              <span className="text-lg font-bold">¥{totalAmount.toLocaleString()}</span>
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
