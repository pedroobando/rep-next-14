'use client';

import { usePersonStore } from '@/stores';
import { WhiteCard } from '../card/WhiteCard';
import { IoPawOutline } from 'react-icons/io5';

export const CardPersonDash = () => {
  const { fullName } = usePersonStore((state) => state);
  return (
    <WhiteCard centered href="/dashboard/personas">
      <IoPawOutline size={50} className="text-indigo-600" />
      <h2>Persona</h2>
      <p>{fullName()}</p>
    </WhiteCard>
  );
};
