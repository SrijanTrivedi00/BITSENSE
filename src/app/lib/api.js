import axios from 'axios';

export const fetchTopCryptos = async () => {
  const page1 = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets',
    {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 250,
        page: 1,
      }
    }
  );

  const page2 = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets',
    {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 250,
        page: 2,
      }
    }
  );

  return [...page1.data, ...page2.data]; // 500 coins
};
