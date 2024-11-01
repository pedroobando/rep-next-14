import { PokemonFavGrid, PokemonGrid, PokemonResponse, SimplePokemon } from '@/pokemons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Listado de pokemones',
};

export default async function FavoritesPokemonPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemon Favoritos<small className="text-blue-500 text-4xl ml-2">Global State</small>
      </span>
      <PokemonFavGrid />
      {/* <PokemonGrid pokemons={[]} /> */}
    </div>
  );
}
