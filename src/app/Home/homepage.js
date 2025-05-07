'use client';
import { useState, useEffect } from 'react';
import { FiTrendingUp, FiShield, FiDollarSign, FiBarChart2, FiArrowUpRight } from 'react-icons/fi';
import { fetchTopCryptos } from '../lib/api';

export default function HomeContent() {
  const [activeTab, setActiveTab] = useState('BTC');
  const [topCryptos, setCrypto] = useState([]);
  
  useEffect(() => {
    fetchTopCryptos().then(setCrypto);
  }, []);

  // Enhanced features list with futuristic descriptions
  const features = [
    {
      icon: <FiTrendingUp className="w-8 h-8 text-primary" />,
      title: "Quantum-Fast Trading",
      description: "AI-powered execution with sub-millisecond latency for optimal trade performance"
    },
    {
      icon: <FiShield className="w-8 h-8 text-primary" />,
      title: "Neural Security",
      description: "Blockchain-powered multi-layer protection with quantum-resistant encryption"
    },
    {
      icon: <FiDollarSign className="w-8 h-8 text-primary" />,
      title: "Dynamic Fee Structure",
      description: "AI-optimized fees that adapt to market conditions and your trading volume"
    },
    {
      icon: <FiBarChart2 className="w-8 h-8 text-primary" />,
      title: "Predictive Analytics",
      description: "Machine learning indicators and algorithmic trading tools for next-gen traders"
    }
  ];

  return (
    <main className="flex-1 relative z-10 overflow-hidden">
      {/* Hero Section with animated gradient */}
      <section className="relative min-h-[80vh] bg-gray-950 text-white overflow-hidden">
  {/* Improved background gradient */}
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-dark/80">
    {/* Subtle grid texture */}
    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
    
    {/* Animated radial gradient */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[100px] animate-float-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px] animate-float-slow animation-delay-3000"></div>
    </div>
  </div>

  {/* Floating crypto coins animation - now with proper React rendering */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {Array.from({ length: 15 }).map((_, i) => {
      const coins = ['₿', 'Ξ', '◎', '�'];
      const coin = coins[i % coins.length];
      const animationDuration = `${Math.random() * 15 + 10}s`;
      const animationDelay = `${Math.random() * 5}s`;
      
      return (
        <div 
          key={i}
          className="absolute text-yellow-400/30 font-bold animate-float"
          style={{
            fontSize: `${Math.random() * 24 + 16}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: animationDuration,
            animationDelay: animationDelay
          }}
        >
          {coin}
        </div>
      );
    })}
  </div>
  
  {/* Content */}
  <div className="container mx-auto px-6 h-full flex items-center justify-center text-center relative z-10">
    <div className="max-w-5xl mx-auto py-24">
      <h1 className="
        text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight
        bg-clip-text text-transparent 
        bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500
        relative
        hover:bg-gradient-to-r hover:from-yellow-400 hover:via-amber-500 hover:to-orange-600
        transition-all duration-500 
        hover:-translate-y-1 hover:drop-shadow-[0_5px_30px_rgba(245,158,11,0.6)]
        active:scale-95 cursor-pointer
      ">
        Next-Gen Crypto Trading
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
        Institutional-grade trading platform with <span className="text-amber-400 font-semibold">AI-powered</span> analytics and <span className="text-blue-400 font-semibold">lightning-fast</span> execution
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
        <button className="
          relative overflow-hidden group 
          bg-gradient-to-br from-blue-600 to-blue-500 
          hover:from-blue-500 hover:to-blue-400 
          px-10 py-5 rounded-xl text-lg font-bold 
          transition-all duration-300 
          transform hover:scale-105 hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.5)]
          active:scale-95 z-10
          border border-blue-400/30
          shadow-lg
        ">
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Start Trading
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>
        
        <button className="
          relative overflow-hidden group 
          bg-gray-900/60 border border-gray-700 
          hover:bg-gray-800/60 hover:border-gray-600 
          px-10 py-5 rounded-xl text-lg font-bold 
          transition-all duration-300 
          transform hover:scale-105 hover:shadow-[0_10px_30px_-5px_rgba(255,255,255,0.1)]
          active:scale-95 z-10
          shadow-lg
        ">
          <span className="relative z-10 flex items-center justify-center gap-2 text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
            </svg>
            Explore Features
          </span>
        </button>
      </div>
      
      <div className="mt-16 flex flex-wrap justify-center gap-4 opacity-90">
        {[
          { symbol: 'BTC', change: 2.85 },
          { symbol: 'ETH', change: 1.92 },
          { symbol: 'SOL', change: 5.42 },
          { symbol: 'XRP', change: 0.78 }
        ].map((coin) => (
          <div key={coin.symbol} className="px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-800 flex items-center gap-2">
            <span className="font-bold text-amber-400">{coin.symbol}</span>
            <span className={`text-sm font-mono ${coin.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {coin.change > 0 ? '↑' : '↓'} {Math.abs(coin.change)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Market Overview with glassmorphism effect */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-950 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            Real-Time Market Pulse
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-xl p-6 border border-gray-700/50">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {topCryptos.slice(0,5).map((crypto) => (
                <div 
                  key={crypto.symbol} 
                  className="bg-gray-800/70 hover:bg-gray-700/70 p-4 rounded-lg transition-all duration-300 border border-gray-700/50 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex items-center mb-2">
                    <img 
                      className="w-8 h-8 rounded-full object-cover border border-gray-600" 
                      src={crypto.image} 
                      alt={crypto.name}
                    />
                    <span className="text-gray-300 ml-2 font-medium">{crypto.symbol.toUpperCase()}</span>
                  </div>
                  <div className="text-lg font-semibold text-white">{`$${crypto.current_price.toLocaleString()}`}</div>
                  <div className={`text-sm font-medium ${crypto.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {crypto.price_change_percentage_24h >= 0 ? '↑' : '↓'} {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with 3D hover effect */}
      <section className="py-16 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              The Future of Trading is Here
            </h2>
            <p className="text-xl text-gray-400">
              Our platform combines cutting-edge technology with intuitive design for unparalleled performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 hover:bg-gray-700/50 p-6 rounded-xl transition-all duration-500 border border-gray-700/50 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 group perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="transform group-hover:rotate-y-6 transition-transform duration-500">
                  <div className="mb-6 p-2 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with particle background */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/particle-bg.svg')] animate-particle-move"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Join the Trading Revolution
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Be part of the next generation of traders leveraging AI-powered insights and quantum-speed execution
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="relative overflow-hidden group bg-white hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold text-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
              <span className="relative z-10">Create Free Account</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="relative overflow-hidden group bg-transparent border-2 border-blue-400 hover:bg-blue-900/30 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">Explore Pro Features</span>
              <span className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </section>

      {/* News/Updates Section with holographic effect */}
      <section className="py-16 bg-gray-950 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            Market Intelligence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="relative overflow-hidden group bg-gray-800/50 border border-gray-700 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/holographic-pattern.svg')] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 relative">
                  <div className="text-sm text-gray-400 mb-2">May 15, 2023</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                    Quantum Computing & Crypto
                  </h3>
                  <p className="text-gray-400 mb-4">
                    How breakthroughs in quantum technology are shaping the future of blockchain security and trading...
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                    Read Analysis <FiArrowUpRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}