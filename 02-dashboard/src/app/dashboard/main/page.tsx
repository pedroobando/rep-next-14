import { GridWidget } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin-Dashboard',
  description: 'Administracion de dashboard',
};

export default function MainPage() {
  return (
    <section className="text-black">
      <header className="flex flex-row text-center content-center justify-between items-baseline">
        <h1 className="mt-2 text-3xl">Dashboard</h1>
        <span className="text-2xl">Informacion General</span>
      </header>

      <GridWidget />
    </section>
  );
}
