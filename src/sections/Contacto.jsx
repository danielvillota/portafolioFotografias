import React from 'react';
import { ContactoData } from '../data/data';
import { LayoutContacto } from '../components/Layout';

export const Contacto = () => {
  return (
    <section id='videoIA' className='px-6 font-roboto'>
      <LayoutContacto>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <aside className='text-center py-10 border border-app-primary-600 rounded-xl'>
          <section className='lg:px-10'>
            <h1 className='text-app-primary-600 font-semibold text-5xl break-words whitespace-pre-line mt-10'>
              {ContactoData.title}
            </h1>
            <p className='px-5 mt-4 text-lg text-app-secundary-950 font-semibold text-justify lg:px-0'>
              {ContactoData.subTitle}
            </p>
          </section>

          {/* Video */}
          <section className='mt-6'>
            <video controls className='w-full max-w-[700px] mx-auto rounded-lg'>
              <source src={ContactoData.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        </aside>
      </LayoutContacto>
    </section>
  );
};

export default Contacto;
