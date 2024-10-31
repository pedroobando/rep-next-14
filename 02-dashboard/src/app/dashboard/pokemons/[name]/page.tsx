import { Pokemon, PokemonResponse, PokemonSimple } from '@/pokemons';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  // const staticPokemon151 = Array.from({ length: 151 }).map((v, i) => `${i + 1}`);
  // return staticPokemon151.map((id) => ({ id: id }));
  const totalPokemon: number = 151;
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}`).then((res) =>
    res.json(),
  );

  const staticPokemon151 = data.results.map((pokemon) => ({
    name: pokemon.name,
  }));
  return staticPokemon151.map((pokeName) => ({ name: pokeName.name }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;

  try {
    const { id } = await getPokemon(name);

    return {
      title: `${id} - ${name}`,
      description: `Pagina del pokemon ${name}`,
    };
  } catch {
    return {
      title: 'Pagina del pokemon',
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium saepe odit perspiciatis ad nisi repudiandae harum, sequi dignissimos eaque porro numquam illum neque perferendis cum rerum nostrum atque aperiam! A?',
    };
  }
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const pokemon: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      cache: 'force-cache',
      // next: { revalidate: 60 * 60 * 30 * 6 },
    }).then((res) => res.json());
    // console.log(pokemon);
    // if (!pokemon) notFound();

    // console.log('Se cargo:', pokemon.name);
    return pokemon;
  } catch {
    notFound();
  }
};

// type Params = Promise<{ id: string }>;
// { params }: Props
export default async function PokemonPage({ params }: Props) {
  const { name } = await params;
  const pokemon = await getPokemon(name);

  return <PokemonSimple pokemon={pokemon} />;
}
