import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { useCryptoStore } from '../store/useCryptoStore';
import { useWalletStore } from '../store/useWalletStore';

export const TradePanel: React.FC = () => {
  const { selectedCrypto } = useCryptoStore();
  const { connected } = useWalletStore();
  const [amount, setAmount] = useState('');
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');

  const handleTrade = async () => {
    if (!connected) {
      alert('Please connect your wallet first');
      return;
    }
    
    try {
      // Implement trade execution logic here
      console.log(`Executing ${tradeType} order for ${amount} ${selectedCrypto?.symbol}`);
    } catch (error) {
      console.error('Trade execution failed:', error);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Trade {selectedCrypto?.symbol || 'Crypto'}</h2>
        <button
          onClick={() => setTradeType(tradeType === 'buy' ? 'sell' : 'buy')}
          className="p-2 rounded-lg hover:bg-gray-700"
        >
          <ArrowUpDown className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
          />
        </div>

        <button
          onClick={handleTrade}
          disabled={!connected || !amount}
          className={`w-full py-3 rounded-lg font-semibold ${
            tradeType === 'buy'
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-red-600 hover:bg-red-700'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {tradeType.toUpperCase()}
        </button>
      </div>
    </div>
  );
};