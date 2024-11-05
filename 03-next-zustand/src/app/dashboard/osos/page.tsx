import { Metadata } from 'next';
import { BearsDisplay, BlackBears, PandaBears, PolarBears } from '@/components';

export const metadata: Metadata = {
  title: 'Contador de Osos',
  description: 'Control de estado',
};

export default function OsosPage() {
  return (
    <>
      <h1 className="text-4xl my-2">Contador de Osos</h1>
      <p className="text-xl">Manejo de estado simple de Zustand</p>
      <hr className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears />
        <PolarBears />
        <PandaBears />
        <BearsDisplay />
      </div>
    </>
  );
}
