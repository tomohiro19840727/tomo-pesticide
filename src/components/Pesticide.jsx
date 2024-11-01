import React from 'react'
import { useState } from 'react'

const Pesticide = () => {
  const [quantity, setQuantity] = useState(0);  
  const [usedQuantity, setUsedQuantity] = useState(0); // 使用量
  const [remaining, setRemaining] = useState(quantity); // 初期残量はquantityで設定
  const unitPrice = 15000; // 単価

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleUsedIncrement = () => {
    if (remaining > 0) {
      setUsedQuantity(prevUsedQuantity => prevUsedQuantity + 1);
      setRemaining(prevRemaining => prevRemaining - 1); // 残量を減少
    }
  }; 


  const handleUsedDecrement = () => {
    if (usedQuantity > 0) {
      setUsedQuantity(prevUsedQuantity => prevUsedQuantity - 1);
      setRemaining(prevRemaining => prevRemaining + 1); // 残量を増加
    }
  };

  return (
    <div>
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-6 sm:mb-10 lg:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">農薬在庫</h2>
          <div className="flex justify-center gap-4 mt-6">
              <button className="px-6 py-2 text-lg font-semibold text-white bg-indigo-500 rounded-lg transition duration-100 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">全て</button>
              <button className="px-6 py-2 text-lg font-semibold text-white bg-indigo-500 rounded-lg transition duration-100 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">除草剤</button>
              <button className="px-6 py-2 text-lg font-semibold text-white bg-indigo-500 rounded-lg transition duration-100 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">殺菌・殺虫剤</button>
            </div>
        </div>
     
     


        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          <div className="py-5 sm:py-8">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div className="sm:-my-2.5">
                <a href="#" className="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-72 sm:w-56">
                  <img src="/img/スクリーンショット 2024-10-25 14.10.23.png" loading="lazy" alt="Photo by Thái An" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">パワーカイザー</a>
                  <span className="block text-gray-500">Size: 5ℓ</span>
                </div>

                <div className="mt-4">
                  <table className="table-auto w-full text-sm text-left text-gray-800">
                    <tbody>
                      <tr>
                        <td className="py-1 font-bold">希釈倍数・使用量</td>
                        <td className="py-1">200～300mL/10a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">散布液量</td>
                        <td className="py-1">100リットル/10a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用時期</td>
                        <td className="py-1">出芽直前～3葉期まで</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用回数</td>
                        <td className="py-1">1回</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用方法</td>
                        <td className="py-1">雑草茎葉散布又は全面土壌散布</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4">
                  <span className="mb-1 block font-bold text-gray-800 md:text-lg">価格: ¥15,000</span>
                </div>
              </div>

              <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-12 w-20 overflow-hidden rounded border">
                  <div className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring">
                    {quantity}
                    </div>
                    <div className="flex flex-col divide-y border-l">
                    <button onClick={handleIncrement} className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">+</button>
                    <button onClick={handleDecrement} className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">-</button>
                    </div>
                  </div>
                  <button className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">削除</button>
                </div>

                <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                <span className="block font-bold text-gray-800 md:text-lg">合計: ¥{(unitPrice * quantity).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          <div className="py-5 sm:py-8">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div className="sm:-my-2.5">
                <a href="#" className="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-72 sm:w-56">
                  <img src="/img/スクリーンショット 2024-10-25 14.06.09.png" loading="lazy" alt="Photo by Thái An" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">兆1キロ粒剤</a>
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
                        <td className="py-1 font-bold">散布液量</td>
                        <td className="py-1">100リットル/10a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用時期</td>
                        <td className="py-1">植代後～移植7日前又は移植直後～ノビエ1.5葉期 ただし移植後30日まで</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用回数</td>
                        <td className="py-1">1回</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用方法</td>
                        <td className="py-1">湛水散布又は無人航空機による散布</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4">
                  <span className="mb-1 block font-bold text-gray-800 md:text-lg">価格: ¥15,000</span>
                </div>
              </div>

              <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-12 w-20 overflow-hidden rounded border">
                    <input type="number" value="1" className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring" />
                    <div className="flex flex-col divide-y border-l">
                      <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">+</button>
                      <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">-</button>
                    </div>
                  </div>
                  <button className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">削除</button>
                </div>

                <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                  <span className="block font-bold text-gray-800 md:text-lg">合計: ¥15,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          <div className="py-5 sm:py-8">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div className="sm:-my-2.5">
                <a href="#" className="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-72 sm:w-56">
                  <img src="/img/スクリーンショット 2024-10-25 14.10.23.png" loading="lazy" alt="Photo by Thái An" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
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
                        <td className="py-1 font-bold">種類</td>
                        <td className="py-1">一年生雑草</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">適用病害虫名</td>
                        <td className="py-1">雑草</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">希釈倍数・使用量</td>
                        <td className="py-1">200～300mL/10a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">散布液量</td>
                        <td className="py-1">100リットル/10a</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用時期</td>
                        <td className="py-1">出芽直前～3葉期まで</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用回数</td>
                        <td className="py-1">1回</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">使用方法</td>
                        <td className="py-1">雑草茎葉散布又は全面土壌散布</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-bold">適用地帯／場所</td>
                        <td className="py-1">畦間処理は1回以内</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4">
                  <span className="mb-1 block font-bold text-gray-800 md:text-lg">価格: ¥20,000</span>
                </div>
              </div>

              <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-12 w-20 overflow-hidden rounded border">
                    <input type="number" value="1" className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring" />
                    <div className="flex flex-col divide-y border-l">
                      <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">+</button>
                      <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">-</button>
                    </div>
                  </div>
                  <button className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">削除</button>
                </div>

                <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                  <span className="block font-bold text-gray-800 md:text-lg">合計: ¥20,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
            <div>
              <div className="flex items-start justify-between gap-4 text-gray-800">
                <span className="text-lg font-bold">合計金額</span>
                <span className="flex flex-col items-end">
                  <span className="text-lg font-bold">¥15,000</span>
                </span>
              </div>
            </div>
          </div>
          <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">何かのボタン</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Pesticide