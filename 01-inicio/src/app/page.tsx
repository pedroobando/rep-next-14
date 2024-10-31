import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO Title - Pagina Principal',
  description: 'Contact Page',
  keywords: ['Contact', 'Page', 'Prueba'],
};

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola Mundo. Maria 2</span>
      <h2 className="text-2xl">Maria los palotes</h2>

      <Link href="/about" className="mt-4">
        About Page
      </Link>
    </main>
  );
}
