import axios from 'axios';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

export const getTokenPrice = async (tokenId: string) => {
  const response = await axios.get(`${COINGECKO_API}/simple/price`, {
    params: {
      ids: tokenId,
      vs_currencies: 'usd',
    },
  });
  return response.data;
};

export const getTokenList = async () => {
  const response = await axios.get(`${COINGECKO_API}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
    },
  });
  return response.data;
};