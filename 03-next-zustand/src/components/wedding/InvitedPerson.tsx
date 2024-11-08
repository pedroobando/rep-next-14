'use client';

import { useWeddingBoundStore } from '@/stores';

export const InvitedPerson = () => {
  const { firstName, lastName, setFirstName, setLastName } = useWeddingBoundStore((state) => state);

  return (
    <div className="-mx-3 flex flex-wrap">
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">Primer Nombre</label>
          <input
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Primer Nombre"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">Apellido</label>
          <input
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
