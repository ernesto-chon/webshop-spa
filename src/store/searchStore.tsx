import { create } from 'zustand';

export interface SearchInterface {
  input: string;
}

interface SearchStore {
  searchDetails: SearchInterface;
  setSearchDetails: (obj: SearchInterface) => void;
}

export const useSearchStore = create<SearchStore>()((set) => ({
  searchDetails: { input: '' },
  setSearchDetails: (obj) => set({ searchDetails: obj }),
}));
