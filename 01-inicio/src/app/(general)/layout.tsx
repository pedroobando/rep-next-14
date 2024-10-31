import { Navbar } from '@/components';

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col text-center gap-12 p-24">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}
