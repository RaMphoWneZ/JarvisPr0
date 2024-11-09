import { create } from 'zustand';

interface Crypto {
  symbol: string;
  name: string;
}

interface CryptoState {
  selectedCrypto: Crypto | null;
  setSelectedCrypto: (crypto: Crypto) => void;
}

export const useCryptoStore = create<CryptoState>((set) => ({
  selectedCrypto: null,
  setSelectedCrypto: (crypto) => set({ selectedCrypto: crypto }),
}));