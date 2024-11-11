import { CartCounter } from '@/shopping-cart';
import { Metadata } from 'next';
import { IoBagCheck } from 'react-icons/io5';

export const metadata: Metadata = {
  title: 'Shoping Page',
  description: 'Un simple contador',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="flex text-blue-800 text-xl items-center justify-center">
        Productos en el Carrito <IoBagCheck className="ml-2" width={30} height={30} />
      </span>

      <CartCounter />
    </div>
  );
}
