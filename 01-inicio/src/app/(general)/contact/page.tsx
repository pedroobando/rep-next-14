// import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Title - Contact',
  description: 'Contact Page',
  keywords: ['Contact', 'Page', 'Prueba'],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-5xl text-red-500">Contact Page</span>
    </>
  );
}
