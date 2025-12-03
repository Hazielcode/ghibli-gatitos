import { create } from 'zustand';

export const useStore = create((set) => ({
  cats: [],
  setCats: (cats) => set({ cats }),
}));