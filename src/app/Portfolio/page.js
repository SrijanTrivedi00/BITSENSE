'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoPortfolioTracker = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [newCoin, setNewCoin] = useState({
    symbol: '',
    amount: 0,
    purchasePrice: 0,
    date: new Date().toISOString().split('T')[0]
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalROI, setTotalROI] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (portfolio.length > 0) {
      fetchCurrentPrices();
    } else {
      setTotalROI(0);
      setTotalInvestment(0);
      setCurrentValue(0);
    }
  }, [portfolio]);

  const fetchCurrentPrices = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const symbols = [...new Set(portfolio.map(item => item.symbol))].join(',');
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${symbols}&vs_currencies=usd`
      );
      
      const prices = response.data;
      
      const updatedPortfolio = portfolio.map(item => {
        const currentPrice = prices[item.symbol.toLowerCase()]?.usd || 0;
        const currentValue = item.amount * currentPrice;
        const investment = item.amount * item.purchasePrice;
        const roi = ((currentValue - investment) / investment) * 100;
        
        return {
          ...item,
          currentPrice,
          currentValue,
          roi
        };
      });
      
      setPortfolio(updatedPortfolio);
      
      const totalInv = updatedPortfolio.reduce((sum, item) => sum + (item.amount * item.purchasePrice), 0);
      const totalCurrValue = updatedPortfolio.reduce((sum, item) => sum + item.currentValue, 0);
      const totalRoi = ((totalCurrValue - totalInv) / totalInv) * 100;
      
      setTotalInvestment(totalInv);
      setCurrentValue(totalCurrValue);
      setTotalROI(totalRoi);
    } catch (err) {
      setError('Failed to fetch current prices. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCoin(prev => ({
      ...prev,
      [name]: name === 'symbol' ? value.toUpperCase() : value
    }));
  };

  const handleAddCoin = () => {
    if (!newCoin.symbol || newCoin.amount <= 0 || newCoin.purchasePrice <= 0) {
      setError('Please fill all fields with valid values');
      return;
    }
    
    setPortfolio(prev => [...prev, newCoin]);
    setNewCoin({
      symbol: '',
      amount: 0,
      purchasePrice: 0,
      date: new Date().toISOString().split('T')[0]
    });
    setError(null);
  };

  const handleRemoveCoin = (index) => {
    setPortfolio(prev => prev.filter((_, i) => i !== index));
  };

  const savePortfolio = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('/api/portfolio/save', {
        portfolio,
        totals: {
          investment: totalInvestment,
          currentValue,
          roi: totalROI
        }
      });
      alert('Portfolio saved successfully!');
    } catch (err) {
      setError('Failed to save portfolio');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-600 mb-2">Crypto Portfolio Tracker</h1>
        <p className="text-gray-600">Track your investments and ROI in real-time</p>
      </div>

      {/* Add Coin Form */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Coin</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Symbol (e.g., BTC)</label>
            <input
              type="text"
              name="symbol"
              value={newCoin.symbol}
              onChange={handleInputChange}
              placeholder="BTC"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={newCoin.amount}
              onChange={handleInputChange}
              step="0.00000001"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price (USD)</label>
            <input
              type="number"
              name="purchasePrice"
              value={newCoin.purchasePrice}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Date</label>
            <input
              type="date"
              name="date"
              value={newCoin.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <button
          onClick={handleAddCoin}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Add to Portfolio
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Summary */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-md p-6 mb-8 text-white">
        <h2 className="text-xl font-semibold mb-4">Portfolio Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <p className="text-sm font-medium">Total Investment</p>
            <p className="text-2xl font-bold">${totalInvestment.toFixed(2)}</p>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <p className="text-sm font-medium">Current Value</p>
            <p className="text-2xl font-bold">${currentValue.toFixed(2)}</p>
          </div>
          <div className={`p-4 rounded-lg ${totalROI >= 0 ? 'bg-green-500' : 'bg-red-500'}`}>
            <p className="text-sm font-medium">Total ROI</p>
            <p className="text-2xl font-bold">{totalROI.toFixed(2)}%</p>
          </div>
        </div>
        <button
          onClick={savePortfolio}
          disabled={isLoading}
          className={`mt-4 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-white text-indigo-600 hover:bg-gray-100 focus:ring-white'}`}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Saving...
            </span>
          ) : (
            'Save Portfolio'
          )}
        </button>
      </div>

      {/* Portfolio Holdings */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Your Holdings</h2>
        </div>
        {portfolio.length === 0 ? (
          <div className="p-6 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No coins in your portfolio</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by adding some cryptocurrencies above.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Value</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {portfolio.map((coin, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{coin.symbol}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{coin.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {coin.currentPrice ? `$${coin.currentPrice.toFixed(2)}` : 'Loading...'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {coin.currentValue ? `$${coin.currentValue.toFixed(2)}` : 'Loading...'}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${coin.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {coin.roi ? `${coin.roi.toFixed(2)}%` : 'Loading...'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{coin.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => handleRemoveCoin(index)}
                        className="text-red-600 hover:text-red-900 focus:outline-none"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoPortfolioTracker;