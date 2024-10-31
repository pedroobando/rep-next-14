import { PokemonGrid, PokemonResponse, SimplePokemon } from '@/pokemons';
import { Metadata } from 'next';

const getPokemons = async (limit: number = 20, offset: number = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (res) => res.json(),
  );

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('Esto es un error que no deberia suceder.');

  return pokemons;
};

export const metadata: Metadata = {
  title: 'Pokemons',
  description: 'Listado de pokemones',
};

export default async function PokemosPage() {
  const getData = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemon <small className="text-blue-500 text-5xl font-semibold">statico</small>
      </span>
      <PokemonGrid pokemons={getData} />
    </div>
  );
}
