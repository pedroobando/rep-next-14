'use client';

import { useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget';
import { IoCalculator } from 'react-icons/io5';

export const GridWidget = () => {
  const counter = useAppSelector((state) => state.counter.count);

  return (
    <section className="flex flex-wrap mt-2">
      <SimpleWidget
        title={`${counter}`}
        subtitle="Contador de Carrito"
        href="/dashboard/counter"
        label="Contador"
        icon={<IoCalculator size={50} className="text-blue-500" />}
      />
      <SimpleWidget title={'Pokemons'} />
    </section>
  );
};
