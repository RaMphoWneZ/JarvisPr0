import React from 'react';
import { WalletConnect } from './components/WalletConnect';
import { TradingView } from './components/TradingView';
import { CryptoSelector } from './components/CryptoSelector';
import { TradePanel } from './components/TradePanel';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AI Crypto Trading</h1>
          <WalletConnect />
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            <TradingView />
          </div>
          <div className="space-y-4">
            <CryptoSelector />
            <TradePanel />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;