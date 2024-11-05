'use client';

import { useBearStore } from '@/stores';
import { WhiteCard } from '../card/WhiteCard';
import { useShallow } from 'zustand/shallow';

const BlackBears = () => {
  const blackBears = useBearStore((state) => state.blackBears);
  const increaseBlackBears = useBearStore((state) => state.increaseBlackBears);

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button className="bg-gray-700 text-white px-6 py-2 rounded-2xl" onClick={() => increaseBlackBears(+1)}>
          +1
        </button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
        <button className="bg-gray-700 text-white px-6 py-2 rounded-2xl" onClick={() => increaseBlackBears(-1)}>
          -1
        </button>
      </div>
    </WhiteCard>
  );
};

const PolarBears = () => {
  const polarBears = useBearStore((state) => state.polarBears);
  const increasePolarBears = useBearStore((state) => state.increasePolarBears);

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button className="bg-gray-700 text-white px-6 py-2 rounded-2xl" onClick={() => increasePolarBears(+1)}>
          {' '}
          +1
        </button>
        <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
        <button className="bg-gray-700 text-white px-6 py-2 rounded-2xl" onClick={() => increasePolarBears(-1)}>
          -1
        </button>
      </div>
    </WhiteCard>
  );
};

const PandaBears = () => {
  const pandaBears = useBearStore((state) => state.pandaBears);
  const increasePandaBears = useBearStore((state) => state.increasePandaBears);

  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button className="bg-gray-700 text-white px-6 py-2 rounded-2xl" onClick={() => increasePandaBears(+1)}>
          {' '}
          +1
        </button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
        <button className="bg-gray-700 text-white px-6 py-2 rounded-2xl" onClick={() => increasePandaBears(-1)}>
          -1
        </button>
      </div>
    </WhiteCard>
  );
};

const BearsDisplay = () => {
  const bears = useBearStore(useShallow((state) => state.bears));
  // const bears = useBearStore( state => state.bears );
  const doNothing = useBearStore((state) => state.doNothing);
  const addBear = useBearStore((state) => state.addBear);
  const clearBears = useBearStore((state) => state.clearBears);

  return (
    <WhiteCard>
      <h1>Osos</h1>

      <pre className="my-2">{JSON.stringify(bears, null, 2)}</pre>
      <footer className="flex flex-col gap-2">
        <button className="bg-blue-700 text-white px-4 py-2 rounded-2xl" onClick={doNothing}>
          No hace
        </button>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-2xl" onClick={addBear}>
          Agregar oso
        </button>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-2xl" onClick={clearBears}>
          Borrar osos
        </button>
      </footer>
    </WhiteCard>
  );
};

export { PandaBears, PolarBears, BlackBears, BearsDisplay };
