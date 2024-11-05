import { createJSONStorage, StateStorage } from 'zustand/middleware';

const apiStorage: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    const data = sessionStorage.getItem(name);
    return data;
  },

  setItem: function (name: string, value: string): void | Promise<void> {
    sessionStorage.setItem(name, value);
  },

  removeItem: function (name: string): void | Promise<void> {
    sessionStorage.removeItem(name);
  },
};

export const customSessionStorage = createJSONStorage(() => apiStorage);
