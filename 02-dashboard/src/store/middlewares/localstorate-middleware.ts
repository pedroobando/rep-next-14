import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '..';

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);
    console.log(action.type);

    if (action.type === 'pokemon/toggleFavorite') {
      const { pokemon } = state.getState() as RootState;
      localStorage.setItem('favorite-pokemons', JSON.stringify(pokemon));
      return;
    }

    // if (action.type.split('/')[0] === 'counter') {
    //   const { counter } = state.getState() as RootState;
    //   localStorage.setItem('counter-state', JSON.stringify(counter));
    //   return;
    // }
  };
};
