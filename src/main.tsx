import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Web3Modal } from '@web3modal/react';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { mainnet, polygon, arbitrum, optimism } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { EthereumClient, w3mConnectors } from '@web3modal/ethereum';
import App from './App.tsx';
import './index.css';

const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'; // Replace with your WalletConnect project ID

const { chains, publicClient } = configureChains(
  [mainnet, polygon, arbitrum, optimism],
  [publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
    <Web3Modal
      projectId={projectId}
      ethereumClient={ethereumClient}
      themeMode="dark"
      themeVariables={{
        '--w3m-font-family': 'Inter, sans-serif',
        '--w3m-accent-color': '#3b82f6',
      }}
    />
  </StrictMode>
);