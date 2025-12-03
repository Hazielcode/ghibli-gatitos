import { create } from 'zustand';

export const useStore = create((set) => ({
  Ghibli: [],
  setGhibli: (Ghibli) => set({ Ghibli }),
}));