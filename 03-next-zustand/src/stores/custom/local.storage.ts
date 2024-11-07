import { createJSONStorage, StateStorage } from 'zustand/middleware';

const apiStorage: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem(name);
      return data;
    }
    return null;
    // if (typeof window === 'undefined') return null;
  },

  setItem: function (name: string, value: string): void | Promise<void> {
    localStorage.setItem(name, value);
  },

  removeItem: function (name: string): void | Promise<void> {
    localStorage.removeItem(name);
  },
};

export const customLocalStorage = createJSONStorage(() => apiStorage);
