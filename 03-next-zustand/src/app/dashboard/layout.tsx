import { Sidebar } from '@/components';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex flex-row relative w-screen">
        <Sidebar />

        <main className="p-4 w-full text-gray-900">{children}</main>
      </div>
    </div>
  );
}
