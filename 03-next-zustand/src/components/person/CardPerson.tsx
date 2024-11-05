'use client';

import { usePersonStore } from '@/stores';

export const CardPerson = () => {
  const firstName = usePersonStore((store) => store.firstName);
  const lastName = usePersonStore((store) => store.lastName);

  const setFirstName = usePersonStore((store) => store.setFirstName);
  const setLastName = usePersonStore((store) => store.setLastName);

  return (
    <>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Primer Nombre</label>
            <input
              className="border-2 rounded-lg border-solid border-gray-400 px-2 py-2"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Apellido</label>
            <input
              className="border-2 rounded-lg border-solid border-gray-400 px-2 py-2"
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

      <pre className="bg-gray-200 p-5 rounded-[20px]">
        {JSON.stringify(
          {
            firstName,
            lastName,
          },
          null,
          2,
        )}
      </pre>
    </>
  );
};
