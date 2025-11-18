import React, { useState, useMemo, useCallback } from 'react'

const StoryBook = () => {
  // テーブルのソート状態
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' })
  const [filterText, setFilterText] = useState('')

  // サンプルデータ：農薬一覧
  const pesticideData = useMemo(() => [
    { id: 1, name: 'ラクサー', type: '除草剤', stock: 25, unit: '本', price: 18000, usageArea: 500 },
    { id: 2, name: 'ブラシンフロアブル', type: '殺虫剤', stock: 12, unit: '本', price: 21000, usageArea: 400 },
    { id: 3, name: 'ハーモニー', type: '除草剤', stock: 8, unit: 'kg', price: 12000, usageArea: 600 },
    { id: 4, name: 'アグロセン', type: '殺菌剤', stock: 30, unit: '本', price: 15000, usageArea: 450 },
    { id: 5, name: 'ベストガード', type: '殺虫剤', stock: 15, unit: '本', price: 19000, usageArea: 380 },
  ], [])

  // サンプルデータ：肥料一覧
  const fertilizerData = useMemo(() => [
    { id: 1, name: 'NPK配合肥料', ratio: '15-15-15', stock: 150, unit: 'kg', price: 5000, density: '高' },
    { id: 2, name: '窒素肥料', ratio: '46-0-0', stock: 200, unit: 'kg', price: 3500, density: '中' },
    { id: 3, name: 'リン酸肥料', ratio: '0-46-0', stock: 80, unit: 'kg', price: 4500, density: '高' },
    { id: 4, name: 'カリ肥料', ratio: '0-0-60', stock: 120, unit: 'kg', price: 4000, density: '中' },
    { id: 5, name: '有機肥料', ratio: '5-5-5', stock: 250, unit: 'kg', price: 3000, density: '低' },
  ], [])

  // サンプルデータ：作業記録
  const workLogData = useMemo(() => [
    { id: 1, date: '2025-11-15', crop: 'トマト', task: '農薬散布', duration: 3, status: '完了', notes: 'ブラシンフロアブル使用' },
    { id: 2, date: '2025-11-14', crop: 'キュウリ', task: '肥料施肥', duration: 2, status: '完了', notes: 'NPK配合肥料200kg' },
    { id: 3, date: '2025-11-13', crop: 'ナス', task: '剪定', duration: 4, status: '完了', notes: '副蔓の整理' },
    { id: 4, date: '2025-11-12', crop: 'イチゴ', task: '灌水', duration: 1.5, status: '進行中', notes: '点滴灌水システム' },
    { id: 5, date: '2025-11-11', crop: 'トマト', task: '支柱設置', duration: 5, status: '完了', notes: 'V字支柱' },
  ], [])

  // ソートと フィルタリング処理
  const sortAndFilterData = useCallback((data, searchKey = 'name') => {
    let filtered = data.filter(item =>
      item[searchKey].toString().toLowerCase().includes(filterText.toLowerCase())
    )

    return [...filtered].sort((a, b) => {
      const aVal = a[sortConfig.key]
      const bVal = b[sortConfig.key]

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1
      return 0
    })
  }, [sortConfig, filterText])

  // メモ化されたソート済みデータ
  const filteredPesticideData = useMemo(() => sortAndFilterData(pesticideData), [sortAndFilterData, pesticideData])
  const filteredFertilizerData = useMemo(() => sortAndFilterData(fertilizerData), [sortAndFilterData, fertilizerData])
  const filteredWorkLogData = useMemo(() => sortAndFilterData(workLogData, 'crop'), [sortAndFilterData, workLogData])

  // ソートハンドラー
  const handleSort = useCallback((key) => {
    setSortConfig(prevConfig => {
      let direction = 'asc'
      if (prevConfig.key === key && prevConfig.direction === 'asc') {
        direction = 'desc'
      }
      return { key, direction }
    })
  }, [])

  // テーブルヘッダーコンポーネント
  const TableHeader = ({ columns }) => (
    <thead className="bg-gradient-to-r from-slate-700 to-slate-600 sticky top-0">
      <tr>
        {columns.map((col) => (
          <th
            key={col.key}
            onClick={() => handleSort(col.key)}
            className="px-6 py-4 text-left text-sm font-bold text-white hover:bg-slate-700 transition cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              {col.label}
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m0 0l4 4m10-4v12m0 0l4-4m0 0l-4-4" />
              </svg>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )

  // テーブルセルコンポーネント
  const TableCell = ({ value, type = 'text' }) => {
    let displayValue = value
    let cellClass = 'text-gray-300'

    if (type === 'status') {
      const statusColors = {
        '完了': 'bg-green-500/20 text-green-300',
        '進行中': 'bg-blue-500/20 text-blue-300',
        '未実施': 'bg-gray-500/20 text-gray-300',
      }
      cellClass = statusColors[value] || 'text-gray-300'
      displayValue = <span className={`px-3 py-1 rounded-full text-xs font-bold ${cellClass}`}>{value}</span>
    } else if (type === 'stock') {
      cellClass = value > 50 ? 'text-green-300 font-bold' : value > 20 ? 'text-yellow-300 font-bold' : 'text-red-300 font-bold'
    } else if (type === 'price') {
      displayValue = `¥${value.toLocaleString()}`
    }

    return <td className={`px-6 py-4 text-sm ${cellClass}`}>{displayValue}</td>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 md:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              在庫・作業管理
            </span>
          </h1>
          <p className="text-xl text-gray-300">農薬、肥料、作業記録を一元管理</p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="農薬、肥料、作物名で検索..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition"
            />
          </div>
        </div>

        {/* Pesticide Table */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">農薬在庫</h2>
            <p className="text-gray-400">登録済みの農薬一覧です。在庫状況をリアルタイムで確認できます。</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-600 hover:border-orange-500/50 transition shadow-lg hover:shadow-orange-500/20">
            <table className="w-full">
              <TableHeader
                columns={[
                  { key: 'name', label: '農薬名' },
                  { key: 'type', label: '種類' },
                  { key: 'stock', label: '在庫' },
                  { key: 'unit', label: '単位' },
                  { key: 'price', label: '単価' },
                  { key: 'usageArea', label: '使用可能面積' },
                ]}
              />
              <tbody className="bg-gradient-to-b from-slate-800 to-slate-900">
                {filteredPesticideData.length > 0 ? (
                  filteredPesticideData.map((item, idx) => (
                    <tr key={item.id} className={`border-t border-slate-700 hover:bg-slate-700/50 transition ${idx % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-900/50'}`}>
                      <TableCell value={item.name} />
                      <TableCell value={item.type} />
                      <TableCell value={item.stock} type="stock" />
                      <TableCell value={item.unit} />
                      <TableCell value={item.price} type="price" />
                      <TableCell value={`${item.usageArea}a`} />
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-gray-400">
                      検索結果がありません
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Fertilizer Table */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">肥料在庫</h2>
            <p className="text-gray-400">肥料の種類と在庫を管理します。</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-600 hover:border-orange-500/50 transition shadow-lg hover:shadow-orange-500/20">
            <table className="w-full">
              <TableHeader
                columns={[
                  { key: 'name', label: '肥料名' },
                  { key: 'ratio', label: 'N-P-K比' },
                  { key: 'stock', label: '在庫' },
                  { key: 'unit', label: '単位' },
                  { key: 'price', label: '単価' },
                  { key: 'density', label: '濃度' },
                ]}
              />
              <tbody className="bg-gradient-to-b from-slate-800 to-slate-900">
                {filteredFertilizerData.length > 0 ? (
                  filteredFertilizerData.map((item, idx) => (
                    <tr key={item.id} className={`border-t border-slate-700 hover:bg-slate-700/50 transition ${idx % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-900/50'}`}>
                      <TableCell value={item.name} />
                      <TableCell value={item.ratio} />
                      <TableCell value={item.stock} type="stock" />
                      <TableCell value={item.unit} />
                      <TableCell value={item.price} type="price" />
                      <TableCell value={item.density} />
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-gray-400">
                      検索結果がありません
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Work Log Table */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">作業記録</h2>
            <p className="text-gray-400">日々の農作業記録を管理します。</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-600 hover:border-orange-500/50 transition shadow-lg hover:shadow-orange-500/20">
            <table className="w-full">
              <TableHeader
                columns={[
                  { key: 'date', label: '日付' },
                  { key: 'crop', label: '作物名' },
                  { key: 'task', label: '作業内容' },
                  { key: 'duration', label: '所要時間' },
                  { key: 'status', label: 'ステータス' },
                  { key: 'notes', label: '備考' },
                ]}
              />
              <tbody className="bg-gradient-to-b from-slate-800 to-slate-900">
                {filteredWorkLogData.length > 0 ? (
                  filteredWorkLogData.map((item, idx) => (
                    <tr key={item.id} className={`border-t border-slate-700 hover:bg-slate-700/50 transition ${idx % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-900/50'}`}>
                      <TableCell value={item.date} />
                      <TableCell value={item.crop} />
                      <TableCell value={item.task} />
                      <TableCell value={`${item.duration}h`} />
                      <TableCell value={item.status} type="status" />
                      <TableCell value={item.notes} />
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-gray-400">
                      検索結果がありません
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-6 hover:border-orange-500 transition group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">総農薬在庫</p>
                <p className="text-3xl font-bold text-white group-hover:text-orange-400 transition">{pesticideData.reduce((sum, p) => sum + p.stock, 0)}</p>
              </div>
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-xs">品目: {pesticideData.length}</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-6 hover:border-orange-500 transition group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">総肥料在庫</p>
                <p className="text-3xl font-bold text-white group-hover:text-orange-400 transition">{fertilizerData.reduce((sum, f) => sum + f.stock, 0)}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-xs">品目: {fertilizerData.length}</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-6 hover:border-orange-500 transition group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">作業記録数</p>
                <p className="text-3xl font-bold text-white group-hover:text-orange-400 transition">{workLogData.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-xs">完了: {workLogData.filter(w => w.status === '完了').length}</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-6 hover:border-orange-500 transition group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">総投資額</p>
                <p className="text-3xl font-bold text-white group-hover:text-orange-400 transition">
                  ¥{(
                    pesticideData.reduce((sum, p) => sum + p.price * p.stock, 0) +
                    fertilizerData.reduce((sum, f) => sum + f.price * f.stock, 0)
                  ).toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-xs">農薬+肥料</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default StoryBook
