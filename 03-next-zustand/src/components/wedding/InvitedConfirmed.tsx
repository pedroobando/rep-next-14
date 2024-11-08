'use client';

import { useWeddingBoundStore } from '@/stores';

export const InvitedConfirmed = () => {
  const { isConfirmed, setIsConfirmed } = useWeddingBoundStore((state) => state);

  return (
    <div className="mb-5">
      <label className="mb-3 block text-base font-medium text-[#07074D]">¿Tu también vendrás?</label>
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <input
            type="radio"
            name="isComing"
            id="radioButton1"
            className="h-5 w-5"
            checked={isConfirmed}
            onChange={() => setIsConfirmed(true)}
          />
          <label className="pl-3 text-base font-medium text-[#07074D]">Si</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="isComing"
            id="radioButton2"
            className="h-5 w-5"
            checked={!isConfirmed}
            onChange={() => setIsConfirmed(false)}
          />
          <label className="pl-3 text-base font-medium text-[#07074D]">No</label>
        </div>
      </div>
    </div>
  );
};
