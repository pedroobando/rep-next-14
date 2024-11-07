import { CardBears, CardPersonDash, WhiteCard } from '@/components';
import { Metadata } from 'next';
import { IoHeartOutline, IoListOutline, IoLockClosedOutline } from 'react-icons/io5';

// const CardBears = dynamic(() => import('@/components/bears/CardBears'), { ssr: false })

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Control de estado',
};

export default function HomeDashboardPage() {
  // const totalBears = useBearStore((state) => state.totalBears);
  // const firtName = usePersonStore((state) => state.firstName);
  // const getTaskCount = useTaskStore((state) => state.getTaskCount);

  return (
    <>
      <h1 className="text-2xl">Dashboard</h1>
      <p className="text-lg my-2">Información colectiva de varios stores de Zustand</p>
      <hr className="my-2" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <CardBears />

        <CardPersonDash />

        <WhiteCard centered>
          <IoListOutline size={50} className="text-indigo-600" />
          <h2>Tareas</h2>
          {/* <p>{`Total ${getTaskCount()}`}</p> */}
        </WhiteCard>

        <WhiteCard centered>
          <IoHeartOutline size={50} className="text-indigo-600" />
          <h2>Boda</h2>
          <p>Información</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoLockClosedOutline size={50} className="text-indigo-600" />
          <h2>Auth</h2>
          <p>Información</p>
        </WhiteCard>
      </div>
    </>
  );
}
