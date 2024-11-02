'use client';

import { useBearStore } from '@/stores';

export default function OsosPage() {
  const { blackBears, increaseBlackBears } = useBearStore((state) => state);

  const onIncreaseBlackBears = (by: number) => {
    increaseBlackBears(by);
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-black">Osos Page</h1>
      <span className="my-2 text-2xl text-blue-900">{blackBears}</span>

      <button className="w-[15rem] py-2 px-4 bg-gray-800 text-white rounded" onClick={() => onIncreaseBlackBears(1)}>
        Incrementar Osos Black
      </button>
    </div>
  );
}
