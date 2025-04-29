'use client';

import { useEffect, useState } from 'react';
import { fetchTopCryptos } from '../lib/api';
import CryptoChartLive from '../Livemarket/page';
import { useRouter } from 'next/navigation';
import CryptoSentiments from '../utility/Sentiment';

const Cryptos = () => {
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState('');
  const router=useRouter();

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
    <main className="min-h-screen relative z-10 p-4 sm:p-6 text-white">
      <div className="max-w-6xl mx-auto bg-black/80 backdrop-blur-md shadow-xl rounded-2xl p-4 sm:p-6 border border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-400 mb-4 sm:mb-6">
          Top 500 Cryptocurrencies 🚀
        </h1>

        <input
  className="w-50 px-3 py-1.5 rounded-md mb-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm"
  placeholder="Search"
  onChange={handleSearch}
  value={search}
/>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-gray-800 pr-1 sm:pr-2">
          {cryptos
            .filter((coin) =>
              coin.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((coin) => (
              <div
                key={coin.id}
                className="flex items-center justify-between border border-gray-700 p-3 sm:p-4 rounded-lg shadow hover:bg-gray-800 transition text-sm sm:text-base"
              >
                <div className="flex items-center gap-3" onClick={()=>handleCryptoClick(coin.id)}>
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full"
                  />
                  <span className="font-medium text-white">{coin.name}</span>
                </div>
                <span className="text-green-400 font-semibold whitespace-nowrap">
                  ${coin.current_price.toLocaleString()}
                </span>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Cryptos;
