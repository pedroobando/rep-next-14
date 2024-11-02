import { WhiteCard } from '@/components';
import {
  IoAccessibilityOutline,
  IoHeartOutline,
  IoListOutline,
  IoLockClosedOutline,
  IoPawOutline,
} from 'react-icons/io5';

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
        <WhiteCard centered>
          <IoPawOutline size={50} className="text-indigo-600" />
          <h2>Osos</h2>
          {/* <p>{totalBears()}</p> */}
        </WhiteCard>

        <WhiteCard centered>
          <IoAccessibilityOutline size={50} className="text-indigo-600" />
          <h2>Persona</h2>
          {/* <p>{firtName}</p> */}
        </WhiteCard>

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
