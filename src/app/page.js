'use client';

import { useEffect, useState } from 'react';
import { fetchTopCryptos } from './lib/api';

const HomePage = () => {
  const [cryptos, setCryptos] = useState([]);
  const [search,setSearch]=useState('');

  useEffect(() => {
    fetchTopCryptos().then(setCryptos);
  }, []);
const handlesearch=(e)=>{
setSearch(e.target.value);
}
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Top 500 Cryptocurrencies 🚀
        </h1>
        <input className="my-3" placeholder='Search crypto' onChange={handlesearch}></input>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-y-scroll">
          {cryptos.filter((coins)=>coins.name.toLowerCase().includes(search.toLowerCase()))
          .map((coin) => (
            <div
              key={coin.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                <span className="font-medium">{coin.name}</span>
              </div>
              <span className="text-green-600 font-semibold">${coin.current_price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
