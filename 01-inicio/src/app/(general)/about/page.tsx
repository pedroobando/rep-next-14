import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Title - About',
  description: 'Pagina de About',
  keywords: ['About', 'Page', 'Prueba'],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-5xl">About Page</span>
    </>
  );
}
