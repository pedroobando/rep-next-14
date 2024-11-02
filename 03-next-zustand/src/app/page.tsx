import { redirect, RedirectType } from 'next/navigation';

export default function HomePage() {
  redirect('/dashboard', RedirectType.replace);
  return <h1 className="text-xl text-red-700">hola mundo</h1>;
}
