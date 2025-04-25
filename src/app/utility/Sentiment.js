import { useState, useEffect } from 'react';

export default function CryptoSentiments({ coinId = "bitcoin" }) {
  const [sentimentData, setSentimentData] = useState({
    communityScore: 0,
    sentimentVotesUp: 0,
    sentimentVotesDown: 0,
    twitterFollowers: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&community_data=true`
        );
        const coinData = await response.json();
        
        setSentimentData({
          communityScore: coinData.community_score || 0,
          sentimentVotesUp: coinData.sentiment_votes_up_percentage || 0,
          sentimentVotesDown: coinData.sentiment_votes_down_percentage || 0,
          twitterFollowers: coinData.community_data?.twitter_followers || 0
        });
      } catch (error) {
        console.error("Error fetching sentiment data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [coinId]);

  // A new SVG-based gauge that will work reliably
  const SentimentGauge = ({ score }) => {
    // Calculate needle rotation angle (0-10 maps to -90 to 90 degrees)
    const angle = -90 + (score / 10) * 180;
    
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <svg width="220" height="120" viewBox="0 0 220 120">
          {/* Gauge background */}
          <path 
            d="M10,110 A100,100 0 0,1 210,110" 
            stroke="#e5e7eb" 
            strokeWidth="20" 
            fill="none" 
            className="dark:stroke-gray-700" 
          />
          
          {/* Color gradient */}
          <defs>
            <linearGradient id="gaugeGradient" gradientUnits="userSpaceOnUse" x1="10" y1="110" x2="210" y2="110">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          
          <path 
            d="M10,110 A100,100 0 0,1 210,110" 
            stroke="url(#gaugeGradient)" 
            strokeWidth="18" 
            fill="none" 
          />
          
          {/* Gauge ticks */}
          <g>
            <line x1="10" y1="110" x2="10" y2="95" stroke="#6b7280" strokeWidth="2" />
            <line x1="110" y1="10" x2="110" y2="25" stroke="#6b7280" strokeWidth="2" />
            <line x1="210" y1="110" x2="210" y2="95" stroke="#6b7280" strokeWidth="2" />
            
            <line x1="35" y1="83" x2="35" y2="93" stroke="#6b7280" strokeWidth="1" />
            <line x1="60" y1="62" x2="60" y2="72" stroke="#6b7280" strokeWidth="1" />
            <line x1="85" y1="46" x2="85" y2="56" stroke="#6b7280" strokeWidth="1" />
            <line x1="135" y1="46" x2="135" y2="56" stroke="#6b7280" strokeWidth="1" />
            <line x1="160" y1="62" x2="160" y2="72" stroke="#6b7280" strokeWidth="1" />
            <line x1="185" y1="83" x2="185" y2="93" stroke="#6b7280" strokeWidth="1" />
          </g>
          
          {/* Needle */}
          <g transform={`rotate(${angle}, 110, 110)`}>
            <line 
              x1="110" 
              y1="110" 
              x2="110" 
              y2="30" 
              stroke="#1f2937" 
              strokeWidth="2" 
              className="dark:stroke-gray-100" 
            />
            <circle 
              cx="110" 
              cy="110" 
              r="5" 
              fill="#1f2937" 
              className="dark:fill-gray-100" 
            />
          </g>
        </svg>
        
        {/* Score and labels */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white mt-2">
          {score.toFixed(1)}
        </div>
        
        <div className="w-full flex justify-between px-2 mt-2">
          <span className="text-red-500 font-medium text-sm">Bearish</span>
          <span className="text-yellow-500 font-medium text-sm">Neutral</span>
          <span className="text-green-500 font-medium text-sm">Bullish</span>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md w-full">
        <div className="h-40 flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Loading sentiment data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md w-full">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 capitalize">
        {coinId.replace(/-/g, ' ')} Sentiment Analysis
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gauge Visualization */}
        <div className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Community Sentiment
          </h3>
          <SentimentGauge score={sentimentData.communityScore} />
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Positive Sentiment
            </h3>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {sentimentData.sentimentVotesUp.toFixed(1)}%
            </div>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Negative Sentiment
            </h3>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {sentimentData.sentimentVotesDown.toFixed(1)}%
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Twitter Community
            </h3>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {sentimentData.twitterFollowers > 1000 
                ? `${(sentimentData.twitterFollowers / 1000).toFixed(1)}K` 
                : sentimentData.twitterFollowers}
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${
            sentimentData.communityScore > 7.5 ? 'bg-green-50 dark:bg-green-900/20' :
            sentimentData.communityScore > 5 ? 'bg-yellow-50 dark:bg-yellow-900/20' :
            'bg-red-50 dark:bg-red-900/20'
          }`}>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Market Outlook
            </h3>
            <div className={`text-2xl font-bold ${
              sentimentData.sentimentVotesUp > sentimentData.sentimentVotesDown ? 'text-green-600 dark:text-green-400' :
              'text-red-600 dark:text-red-400'
            }`}>
              {sentimentData.sentimentVotesUp > sentimentData.sentimentVotesDown ? 'Bullish' :'Bearish'
               }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}