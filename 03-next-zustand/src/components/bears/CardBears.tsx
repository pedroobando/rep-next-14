'use client';

import { useBearStore } from '@/stores';
import { WhiteCard } from '../card/WhiteCard';
import { IoPawOutline } from 'react-icons/io5';

export const CardBears = () => {
  const totalBears = useBearStore((state) => state.totalBears);
  return (
    <WhiteCard centered href="/dashboard/osos">
      <IoPawOutline size={50} className="text-indigo-600" />
      <h2>Osos</h2>
      <p>{totalBears()}</p>
    </WhiteCard>
  );
};
