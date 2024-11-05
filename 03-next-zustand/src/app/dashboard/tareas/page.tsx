import { JiraGrid } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tareas Jira',
  description: 'Manejo tareas',
};

export default function JiraPage() {
  return (
    <>
      <h1 className="text-4xl my-2">Tareas</h1>
      <p className="text-lg">Manejo de estado con objectos de Zustand</p>
      <hr className="my-4" />

      <JiraGrid />
    </>
  );
}
