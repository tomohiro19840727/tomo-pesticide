import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  // Particle component
  const AnimatedParticle = ({ delay, duration, x, y, size }) => (
    <div
      className="absolute rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-60 blur-sm animate-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );

  // Floating shape component
  const FloatingShape = ({ className, delay }) => (
    <div
      className={`absolute rounded-full opacity-40 blur-2xl animate-blob ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    />
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating blobs */}
        <FloatingShape 
          className="w-96 h-96 bg-orange-500 -top-20 -right-20" 
          delay={0}
        />
        <FloatingShape 
          className="w-72 h-72 bg-red-500 -bottom-20 -left-20" 
          delay={2}
        />
        <FloatingShape 
          className="w-96 h-96 bg-yellow-500 top-1/2 right-1/4" 
          delay={4}
        />

        {/* Animated particles */}
        <AnimatedParticle delay={0} duration={3} x={15} y={20} size={8} />
        <AnimatedParticle delay={0.5} duration={4} x={75} y={30} size={6} />
        <AnimatedParticle delay={1} duration={3.5} x={20} y={70} size={10} />
        <AnimatedParticle delay={1.5} duration={4.5} x={80} y={80} size={7} />
        <AnimatedParticle delay={2} duration={3.2} x={50} y={50} size={5} />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl opacity-10 animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-3xl opacity-10 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content - Relative positioning */}
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 md:px-8 pt-12 md:pt-20">
        {/* Hero Section */}
        <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-8 mb-16 animate-slide-up">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-sm font-bold text-transparent mb-3 tracking-wider animate-gradient-shift">農業管理の新時代</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
                スマート農業で
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent block animate-gradient-shift">効率化を実現</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              農薬・肥料・種子の在庫管理から計算まで、すべてをワンプラットフォームで。プロの農家のための統合管理システム。
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/calculation" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-orange-500/50 transition duration-200 transform hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <span className="relative flex items-center">
                  今すぐ始める
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link 
                to="/tour" 
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold text-lg rounded-lg border-2 border-slate-600 hover:border-orange-500 transition duration-200 transform hover:scale-105"
              >
                ツアーを見る
              </Link>
            </div>

            {/* Animated Stats */}
            <div className="flex gap-8">
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 group-hover:text-orange-300 transition duration-300">100%</div>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition duration-300">クラウド対応</p>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 group-hover:text-orange-300 transition duration-300">リアルタイム</div>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition duration-300">同期更新</p>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 group-hover:text-orange-300 transition duration-300">24/7</div>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition duration-300">アクセス可能</p>
              </div>
            </div>
          </div>

          {/* Right Image with Dynamic Elements */}
          <div className="flex-1 relative h-96 md:h-full min-h-96">
            {/* Animated background orbs */}
            <div className="absolute -inset-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-3xl opacity-20 animate-pulse-glow"></div>
            
            {/* Floating circles */}
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-orange-400/50 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-orange-400/30 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-orange-400/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>

            {/* Main image */}
            <img 
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&q=75&fit=crop&w=1500" 
              loading="lazy" 
              alt="農業管理システム" 
              className="relative h-full w-full object-cover rounded-2xl shadow-2xl border-2 border-orange-500/30 hover:border-orange-500/60 transition duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

            {/* Overlay accent */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-transparent to-red-500/10"></div>
          </div>
        </section>

        {/* Features Section with Animations */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-orange-500 transition duration-300 group hover:shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-2 cursor-pointer">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition transform group-hover:scale-110 group-hover:animate-pulse-glow">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition">かんたん管理</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition">農薬・肥料・種子の在庫をワンクリックで管理。複雑な計算も自動化されます。</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-orange-500 transition duration-300 group hover:shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-2 cursor-pointer">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition transform group-hover:scale-110 group-hover:animate-pulse-glow">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition">高速処理</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition">リアルタイムデータ同期で、いつでもどこからでも最新情報にアクセス可能です。</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-orange-500 transition duration-300 group hover:shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-2 cursor-pointer">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition transform group-hover:scale-110 group-hover:animate-pulse-glow">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition">セキュア</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition">エンタープライズグレードのセキュリティで、あなたのデータを守ります。</p>
          </div>
        </section>

        {/* Bottom CTA with Animation */}
        <section className="mb-20 text-center">
          <div className="relative group">
            {/* Animated background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300 animate-gradient-shift"></div>
            
            <div className="relative bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 border border-orange-500/30 hover:border-orange-500/60 rounded-2xl p-12 transition duration-300">
              <h2 className="text-4xl font-bold text-white mb-4">始めましょう</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                農業経営の効率化は、今です。スマート農業で競争力を高めましょう。
              </p>
              <Link 
                to="/calculation" 
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-orange-500/50 transition duration-200 transform hover:scale-105 relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover/btn:opacity-100 transition duration-300"></div>
                <span className="relative flex items-center">
                  無料で開始
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home