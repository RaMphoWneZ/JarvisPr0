import React from 'react';
import { Search } from 'lucide-react';
import { useCryptoStore } from '../store/useCryptoStore';

export const CryptoSelector: React.FC = () => {
  const { selectedCrypto, setSelectedCrypto } = useCryptoStore();
  
  const popularCryptos = [
    { symbol: 'BTC', name: 'Bitcoin' },
    { symbol: 'ETH', name: 'Ethereum' },
    { symbol: 'SOL', name: 'Solana' },
    { symbol: 'BNB', name: 'Binance Coin' },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search cryptocurrencies..."
          className="w-full bg-gray-700 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      
      <div className="mt-4 space-y-2">
        {popularCryptos.map((crypto) => (
          <button
            key={crypto.symbol}
            onClick={() => setSelectedCrypto(crypto)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCrypto?.symbol === crypto.symbol
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-700'
            }`}
          >
            <span className="font-medium">{crypto.symbol}</span>
            <span className="text-sm text-gray-400 ml-2">{crypto.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};