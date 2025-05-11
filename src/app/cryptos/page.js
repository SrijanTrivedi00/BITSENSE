'use client';

import { useEffect, useState } from 'react';
import { fetchTopCryptos } from '../lib/api';
import CryptoChartLive from '../Livemarket/page';
import { useRouter } from 'next/navigation';
import CryptoSentiments from '../utility/Sentiment';

const Cryptos = () => {
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchTopCryptos().then(setCryptos);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCryptoClick = (coinname) => {
    if (typeof coinname !== "string") {
      console.error("coinname must be a string, got:", typeof coinname);
      return;
    }
    
    router.push(`/Livemarket?coinId=${coinname}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8 px-4 sm:px-6 md:px-8 relative z-10 text-white">
      <div className="max-w-6xl mx-auto bg-black/70 backdrop-blur-xl shadow-2xl rounded-2xl p-5 sm:p-8 border border-gray-700/80">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 text-center">
            Top 500 Cryptocurrencies 🚀
          </h1>
          <p className="text-gray-400 text-sm mb-4 max-w-lg text-center">
            Live prices of the top digital assets in the cryptocurrency market
          </p>
        </div>
        
        <div className="relative w-full max-w-md mx-auto mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-800/80 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm transition-all duration-200"
            placeholder="Search cryptocurrencies..."
            onChange={handleSearch}
            value={search}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-gray-800/40 pr-1 sm:pr-2 pb-2">
          {cryptos.length === 0 ? (
            // Loading state
            Array.from({ length: 12 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="animate-pulse flex items-center justify-between border border-gray-700/60 p-4 rounded-xl bg-gray-800/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-24"></div>
                </div>
                <div className="h-4 bg-gray-700 rounded w-16"></div>
              </div>
            ))
          ) : (
            cryptos
              .filter((coin) =>
                coin.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((coin) => (
                <div
                  key={coin.id}
                  className="flex items-center justify-between border border-gray-700/60 p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/60 hover:border-cyan-600/40 transition-all duration-200 shadow-lg hover:shadow-cyan-900/20 group"
                >
                  <div 
                    className="flex items-center gap-3 cursor-pointer" 
                    onClick={() => handleCryptoClick(coin.id)}
                  >
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full group-hover:scale-110 transition-transform duration-200"
                    />
                    <div>
                      <span className="font-semibold text-white text-base">{coin.name}</span>
                      <p className="text-gray-400 text-xs">{coin.symbol?.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-cyan-400 font-bold whitespace-nowrap text-base">
                      ${coin.current_price?.toLocaleString()}
                    </span>
                    {coin.price_change_percentage_24h && (
                      <span className={`text-xs font-medium mt-1 ${
                        coin.price_change_percentage_24h >= 0 
                          ? 'text-green-400' 
                          : 'text-red-400'
                      }`}>
                        {coin.price_change_percentage_24h >= 0 ? '↑' : '↓'} 
                        {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                      </span>
                    )}
                  </div>
                </div>
              ))
          )}
        </div>
        
        {cryptos.length > 0 && cryptos.filter((coin) => 
          coin.name.toLowerCase().includes(search.toLowerCase())
        ).length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No cryptocurrencies found matching "{search}"
          </div>
        )}
      </div>
      
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>Data refreshes automatically • Prices in USD</p>
      </footer>
    </main>
  );
};

export default Cryptos;