'use client';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, substractOne, resetCounter, initCounter } from '@/store/counter/counterSlice';

interface CounterResponse {
  method: string;
  count: number;
}

// interface Props {
//   value?: number;
// }

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then((resp) => resp.json());
  return data;
};

export const CartCounter: FC = () => {
  const counter = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then((resp) => {
      dispatch(initCounter(resp.count));
    });
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl text-blue-500">{counter}</span>
      <div className="flex justify-center">
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(resetCounter(5))}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          RESET
        </button>
      </div>
    </>
  );
};
