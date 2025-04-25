'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import CryptoSentiments from "../utility/Sentiment.js"
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const CryptoChartLive = ({ coinId = 'bitcoin', days = 1 }) => {
  const [chartData, setChartData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
          {
            params: {
              vs_currency: 'usd',
              days: days
              
            },
          }
        );

        const prices = res.data.prices;

        setChartData(prices.map((item) => item[1]));
        setLabels(prices.map((item) => {
          const date = new Date(item[0]);
          return days > 1
            ? date.toLocaleString()
            : date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }));
      } catch (err) {
        console.error('Failed to fetch chart data:', err);
      }
    };

    fetchChartData();
  }, [coinId, days]);

  const data = {
    labels,
    datasets: [
      {
        label: `${coinId.charAt(0).toUpperCase() + coinId.slice(1)} Price (USD)`,
        data: chartData,
        borderColor: '#36a2eb',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      x: {
        ticks: { maxTicksLimit: 10 },
      },
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="flex">
    <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl w-full border border-gray-100 dark:border-slate-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white capitalize">{coinId} Live Chart</h2>
        <div className="flex items-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
          +2.34%
        </div>
      </div>
      
      <div className="h-64 mt-4">
        <Line 
          data={data} 
          options={options}
        />
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <div>
          24h Volume: <span className="font-medium text-gray-700 dark:text-gray-300">$1.8B</span>
        </div>
        <div>
          Last updated: <span className="font-medium text-gray-700 dark:text-gray-300">5 mins ago</span>
        </div>
      </div>
    </div>
   <CryptoSentiments></CryptoSentiments>
    </div>
  );
};

export default CryptoChartLive;
