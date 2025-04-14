'use client';
import { useState } from 'react';
import { FiTrendingUp, FiShield, FiDollarSign, FiBarChart2, FiArrowUpRight } from 'react-icons/fi';

export default function HomeContent() {
  const [activeTab, setActiveTab] = useState('BTC');

  // Sample market data
  const topCryptos = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$42,890.12', change: '+2.34%', changeType: 'up' },
    { symbol: 'ETH', name: 'Ethereum', price: '$2,345.67', change: '+1.56%', changeType: 'up' },
    { symbol: 'SOL', name: 'Solana', price: '$102.45', change: '-0.78%', changeType: 'down' },
    { symbol: 'ADA', name: 'Cardano', price: '$0.56', change: '+5.12%', changeType: 'up' },
    { symbol: 'DOT', name: 'Polkadot', price: '$7.89', change: '-1.23%', changeType: 'down' },
  ];

  // Features list
  const features = [
    {
      icon: <FiTrendingUp className="w-8 h-8 text-primary" />,
      title: "Lightning-Fast Trading",
      description: "Execute trades in milliseconds with our high-performance matching engine"
    },
    {
      icon: <FiShield className="w-8 h-8 text-primary" />,
      title: "Bank-Grade Security",
      description: "Multi-sig cold wallets and institutional-grade protection for your assets"
    },
    {
      icon: <FiDollarSign className="w-8 h-8 text-primary" />,
      title: "Lowest Fees",
      description: "0.1% spot trading fees with additional discounts for BITS token holders"
    },
    {
      icon: <FiBarChart2 className="w-8 h-8 text-primary" />,
      title: "Advanced Tools",
      description: "Professional charts, indicators, and trading bots for all levels"
    }
  ];

  return (
    <main className="flex-1 relative z-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 relative">
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Trade Crypto with Confidence</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            bitsense offers institutional-grade trading infrastructure with a simple, intuitive interface
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary-dark hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 z-10 relative">
              Start Trading
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 z-10 relative">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white/90 backdrop-blur-sm relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Market Overview</h2>
          <div className="bg-gray-50/90 rounded-xl shadow-sm p-6 backdrop-blur-sm">
            <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
              {['BTC', 'ETH', 'SOL', 'ADA', 'DOT', 'BNB', 'XRP'].map((symbol) => (
                <button
                  key={symbol}
                  onClick={() => setActiveTab(symbol)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${activeTab === symbol ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {symbol}/USDT
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {topCryptos.map((crypto) => (
                <div key={crypto.symbol} className="bg-white/95 p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow backdrop-blur-sm border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                    <span className="font-bold text-gray-900">{crypto.symbol}</span>
                    <span className="text-gray-600 ml-2">{crypto.name}</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">{crypto.price}</div>
                  <div className={`text-sm ${crypto.changeType === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {crypto.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50/90 backdrop-blur-sm relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Why Choose bitsense?</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            We combine cutting-edge technology with user-friendly design to create the best trading experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/95 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm border border-gray-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative">
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of traders who have already chosen bitsense as their preferred crypto exchange
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary-dark hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 z-10 relative">
              Create Account
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 z-10 relative">
              Download App
            </button>
          </div>
        </div>
      </section>

      {/* News/Updates Section */}
      <section className="py-16 bg-white/90 backdrop-blur-sm relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Latest Crypto News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">May 15, 2023</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Bitcoin Adoption Reaches New Highs</h3>
                  <p className="text-gray-700 mb-4">
                    Major retailers now accepting BTC payments as cryptocurrency adoption continues to grow worldwide...
                  </p>
                  <a href="#" className="text-primary font-medium flex items-center">
                    Read More <FiArrowUpRight className="ml-1" />
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