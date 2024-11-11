import { ISimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPokemonState {
  // favorites: Record<string, ISimplePokemon>;
  [key: string]: ISimplePokemon;
}

const getInitialState = (): IPokemonState => {
  if (typeof localStorage === 'undefined') return {};

  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
  return favorites;
};

const initialState: IPokemonState = {
  ...getInitialState(),
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<ISimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
        // return;
      } else {
        state[id] = pokemon;
      }

      //? Esto no debe hacerse en REDUX -
      //? La solucion es mediante middleware
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('favorite-pokemons', JSON.stringify(state));
      }
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
