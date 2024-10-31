import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Price',
  description: 'Price Page',
  keywords: ['Price', 'Page', 'Prueba'],
};

export default function PricePage() {
  return (
    <>
      <span className="text-5xl text-blue-400">Pricing Page</span>
      <hr />
      <span className="block my-8">Numero contador: {20}</span>

      <button className="p-3 border-solid bg-blue-300 rounded inline-block w-44">Presionar</button>
    </>
  );
}
