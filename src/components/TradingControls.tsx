import React from 'react';
import { DollarSign, ArrowUpDown, Settings } from 'lucide-react';

interface TradingControlsProps {
  onTrade: (type: 'buy' | 'sell', amount: number) => void;
  onToggleAutoTrading: () => void;
  isAutoTradingEnabled: boolean;
}

export const TradingControls: React.FC<TradingControlsProps> = ({
  onTrade,
  onToggleAutoTrading,
  isAutoTradingEnabled,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Settings className="w-6 h-6" />
          Trading Controls
        </h3>
        <button
          onClick={onToggleAutoTrading}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            isAutoTradingEnabled
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-gray-600 hover:bg-gray-700'
          }`}
        >
          Auto Trading: {isAutoTradingEnabled ? 'ON' : 'OFF'}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onTrade('buy', 100)}
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <DollarSign className="w-5 h-5" />
          Buy
        </button>
        <button
          onClick={() => onTrade('sell', 100)}
          className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <ArrowUpDown className="w-5 h-5" />
          Sell
        </button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-gray-300 block">Amount (USD)</label>
          <input
            type="number"
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            defaultValue="100"
          />
        </div>
        <div className="space-y-2">
          <label className="text-gray-300 block">Stop Loss (%)</label>
          <input
            type="number"
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            defaultValue="5"
          />
        </div>
      </div>
    </div>
  );
}