import React from 'react';
import { Web3Button } from '@web3modal/react';

export const WalletConnect: React.FC = () => {
  return (
    <div className="flex items-center">
      <Web3Button icon="show" label="Connect Wallet" balance="show" />
    </div>
  );
};