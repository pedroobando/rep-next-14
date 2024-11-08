'use client';

import { useWeddingBoundStore } from '@/stores';

export const InvitedDate = () => {
  const { setEventDate, setEventTime } = useWeddingBoundStore((state) => state);
  const eventHHMM = useWeddingBoundStore((state) => state.eventHHMM());
  const eventYYYYMMDD = useWeddingBoundStore((state) => state.eventYYYYMMDD());

  return (
    <div className="-mx-3 flex flex-wrap">
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">Fecha de evento</label>
          <input
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="date"
            name="eventDate"
            id="eventDate"
            value={eventYYYYMMDD}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">Hora del evento</label>
          <input
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="time"
            name="eventTime"
            id="eventTime"
            value={eventHHMM}
            onChange={(e) => setEventTime(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
