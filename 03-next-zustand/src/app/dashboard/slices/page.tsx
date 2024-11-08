import { InvitedConfirmed, InvitedDate, InvitedGuest, InvitedPerson, WhiteCard } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invitación de Boda',
  description: 'Zustand segmentado en slices',
  authors: { name: 'Pedro Obando', url: 'https://mercantil.com' },
};

export default function WeddingInvitationPage() {
  return (
    <>
      <h1 className="text-4xl my-2">Invitación de Boda</h1>
      <p className="text-lg">Zustand segmentado en slices</p>
      <hr className="my-4" />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <InvitedPerson />

            <InvitedGuest />

            <InvitedDate />

            <InvitedConfirmed />

            <div>
              <button className="bg-blue-500 shadow-2xl px-4 py-2 rounded-3xl w-40 text-white font-bold hover:bg-blue-600 hover:animate-pulse">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </WhiteCard>
    </>
  );
}
