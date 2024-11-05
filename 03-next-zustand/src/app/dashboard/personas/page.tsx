import { CardPerson, WhiteCard } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Persona Page',
  description: 'Manejo de middleware',
};

export default function PersonaPage() {
  return (
    <>
      <h1 className="text-4xl my-2">Persona</h1>
      <p className="text-lg">Informacion que se compartira a otro store, section store, firebase</p>
      <hr className="my-4" />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <CardPerson />
          </form>
        </div>
      </WhiteCard>
    </>
  );
}
