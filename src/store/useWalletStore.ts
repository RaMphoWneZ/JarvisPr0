import { create } from 'zustand';
import { WalletClient } from 'viem';

interface WalletState {
  provider: WalletClient | null;
  address: string | null;
  chainId: number | null;
  connected: boolean;
  setProvider: (provider: WalletClient) => void;
  setAddress: (address: string) => void;
  setChainId: (chainId: number) => void;
  disconnect: () => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  provider: null,
  address: null,
  chainId: null,
  connected: false,
  setProvider: (provider) => set({ provider, connected: true }),
  setAddress: (address) => set({ address }),
  setChainId: (chainId) => set({ chainId }),
  disconnect: () => set({ provider: null, address: null, chainId: null, connected: false }),
}));