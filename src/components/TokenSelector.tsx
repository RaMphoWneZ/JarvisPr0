import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { getTokenList } from '../services/api';

interface Token {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
}

interface TokenSelectorProps {
  onSelect: (token: Token) => void;
}

export const TokenSelector: React.FC<TokenSelectorProps> = ({ onSelect }) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const data = await getTokenList();
        setTokens(data);
      } catch (error) {
        console.error('Error fetching tokens:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  const filteredTokens = tokens.filter(
    token =>
      token.name.toLowerCase().includes(search.toLowerCase()) ||
      token.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search tokens..."
          className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center py-4 text-gray-400">Loading tokens...</div>
      ) : (
        <div className="max-h-60 overflow-y-auto">
          {filteredTokens.map((token) => (
            <button
              key={token.id}
              className="w-full flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg transition-colors"
              onClick={() => onSelect(token)}
            >
              <img src={token.image} alt={token.name} className="w-8 h-8 rounded-full" />
              <div className="flex-1 text-left">
                <div className="font-semibold text-white">{token.symbol.toUpperCase()}</div>
                <div className="text-sm text-gray-400">{token.name}</div>
              </div>
              <div className="text-right">
                <div className="text-white">${token.current_price.toFixed(2)}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};