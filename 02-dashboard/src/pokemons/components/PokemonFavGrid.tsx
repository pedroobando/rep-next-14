'use client';

import { useEffect, useState } from 'react';
import { PokemonGrid } from './PokemonGrid';
import { useAppSelector } from '@/store';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { IoHeartOutline } from 'react-icons/io5';

export const PokemonFavGrid = () => {
  const [favPokemon, setFavPokemon] = useState<SimplePokemon[]>([]);
  const pokemonFav = useAppSelector((state) => Object.values(state.pokemon));

  useEffect(() => {
    setFavPokemon(pokemonFav);
  }, []);

  return <>{favPokemon.length === 0 ? <NotFavorites /> : <PokemonGrid pokemons={favPokemon} />}</>;
};

const NotFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-600" />
      <span>No hay favoritos</span>
    </div>
  );
};
