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
      <section className="relative bg-gradient-to-br from-gray-900 via-primary to-primary-dark text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 z-0"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
          <h1 className="
            text-4xl md:text-6xl font-bold mb-6 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500
            hover:bg-gradient-to-l hover:from-yellow-400 hover:to-amber-600
            transition-all duration-500 
            hover:-translate-y-1 hover:drop-shadow-[0_5px_15px_rgba(245,158,11,0.4)]
            active:scale-95 cursor-pointer
          ">
            Next-Gen Crypto Trading Platform
          </h1>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-5">
              <button className="relative overflow-hidden group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 z-10">
                <span className="relative z-10">Start Trading</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button className="relative overflow-hidden group bg-transparent border-2 border-blue-400 hover:bg-blue-900/30 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 z-10">
                <span className="relative z-10 text-white">Explore Features</span>
                <span className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
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