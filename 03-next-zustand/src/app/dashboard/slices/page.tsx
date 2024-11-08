import { InvitedDate, InvitedGuest, InvitedPerson, WhiteCard } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invitacion de Boda',
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

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">¿Tu también vendrás?</label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input type="radio" name="isComing" id="radioButton1" className="h-5 w-5" />
                  <label className="pl-3 text-base font-medium text-[#07074D]">Si</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="isComing" id="radioButton2" className="h-5 w-5" />
                  <label className="pl-3 text-base font-medium text-[#07074D]">No</label>
                </div>
              </div>
            </div>

            <div>
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </WhiteCard>
    </>
  );
}
