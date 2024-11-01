import { configureStore, Tuple } from '@reduxjs/toolkit';
import counterSlice from './counter/counterSlice';
import pokemonSlice from './pokemon/pokemonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { localStorageMiddleware } from './middlewares/localstorate-middleware';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemon: pokemonSlice,
  },
  // middleware: () => new Tuple(localstoreMiddleware),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),

  // ).concat(localstoreMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
