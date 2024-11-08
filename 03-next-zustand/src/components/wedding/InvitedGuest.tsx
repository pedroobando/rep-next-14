'use client';

import { useWeddingBoundStore } from '@/stores';

export const InvitedGuest = () => {
  const { guestCount, setGuestCount } = useWeddingBoundStore((state) => state);
  return (
    <div className="mb-5">
      <label className="mb-3 block text-base font-medium text-[#07074D]">¿Cuántos invitados traerá?</label>
      <input
        type="number"
        name="guestNumber"
        id="guestNumber"
        placeholder="5"
        // min="0"
        value={guestCount}
        onChange={(e) => setGuestCount(+e.target.value)}
        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
  );
};
