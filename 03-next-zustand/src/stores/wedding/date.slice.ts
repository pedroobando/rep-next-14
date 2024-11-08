import { StateCreator } from 'zustand';

export interface IDateSlice {
  eventDate: number;

  eventYYYYMMDD: () => string;
  eventHHMM: () => string;

  setEventDate: (partialDate: string) => void;
  setEventTime: (eventTime: string) => void;
}

export const createDateSlice: StateCreator<IDateSlice, [['zustand/devtools', never]]> = (set, get) => ({
  eventDate: new Date().getTime(),

  eventYYYYMMDD: () => {
    try {
      const activeDate = new Date(get().eventDate);

      return activeDate.toISOString().split('T')[0];
    } catch (error) {
      return new Date().toISOString().split('T')[0];
    }
  },

  eventHHMM: () => {
    const activeDate = new Date(get().eventDate);
    const hours = activeDate.getHours().toString().padStart(2, '0');
    const minutes = activeDate.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  },

  setEventDate: (parcialDate: string) =>
    set(
      (state) => {
        const date = new Date(parcialDate);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate() + 1;
        const newDate = new Date(state.eventDate);
        newDate.setFullYear(year, month, day);
        return { eventDate: newDate.getTime() };
      },
      false,
      'setEventDate',
    ),

  setEventTime: (eventTime: string) =>
    set(
      (state) => {
        //HH:MM
        const hours = parseInt(eventTime.split(':')[0]);
        const minutes = parseInt(eventTime.split(':')[1]);
        const newDate = new Date(state.eventDate);
        newDate.setHours(hours, minutes);
        return { eventDate: newDate.getTime() };
      },
      false,
      'setEventTime',
    ),
});
