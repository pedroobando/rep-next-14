import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { customLocalStorage } from '../custom/local.storage';
// import { customSessionStorage } from '../custom/session.storage';

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;

  fullName: () => string;
}

const storeAPI: StateCreator<PersonState & Actions, [['zustand/devtools', never]]> = (set, get) => ({
  firstName: '',
  lastName: '',

  setFirstName: (value: string) => set({ firstName: value }, false, 'setFirstName'),
  setLastName: (value: string) => set({ lastName: value }, false, 'setLastName'),

  fullName: () => get().firstName + ' ' + get().lastName,
});

export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(storeAPI, {
      name: 'person-store',
      // skipHydration: true,
      // storage: customSessionStorage, //* Storage Personalizado
      // storage: customLocalStorage,
    }),
  ),
);
