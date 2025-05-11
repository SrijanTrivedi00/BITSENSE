import axios from 'axios';

export const fetchTopCryptos = async () => {
  try {
    const [page1, page2, page3, page4, page5] = await Promise.all([
      axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
        }
      }),
      axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 2,
        }
      }),
      axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 3,
        }
      }),
      axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 4,
        }
      }),
      axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 5,
        }
      })
    ]);

    return [
      ...page1.data,
      ...page2.data,
      ...page3.data,
      ...page4.data,
      ...page5.data
    ]; // 500 coins
  } catch (error) {
    console.error('Error fetching top cryptocurrencies:', error);
    throw error;
  }
};