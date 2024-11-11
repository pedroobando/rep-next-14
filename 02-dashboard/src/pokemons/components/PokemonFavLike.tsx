'use client';

import { FC } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/pokemon/pokemonSlice';

import { ISimplePokemon } from '../interfaces/simple-pokemon';

interface Props {
  pokemon: ISimplePokemon;
}

export const PokemonFavLike: FC<Props> = ({ pokemon }) => {
  const isFavorites = useAppSelector((state) => !!state.pokemon[pokemon.id]);
  const dispatch = useAppDispatch();

  const handleOnToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div onClick={() => handleOnToggle()} className="px-4 py-2 hover:bg-gray-100 flex  items-center cursor-pointer">
      <div className="text-red-600">{isFavorites ? <IoHeart /> : <IoHeartOutline />}</div>
      <div className="pl-3">
        <p className="text-sm font-medium text-gray-800 leading-none">{isFavorites ? 'Favorito' : 'No favorito'}</p>
        <p className="text-xs text-gray-500">Click para cambiar</p>
      </div>
    </div>
  );
};
