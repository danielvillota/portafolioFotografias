import React from 'react';
import { LayoutImageIA } from '../components/Layout';
import { ImagenIaData } from '../data/data';

export const ImageIA = () => {
  return (
    <section id='imageIA' className='pt-[100px] font-roboto bg-custom'>
      <LayoutImageIA>
        <section className='text-center flex flex-col items-center lg:flex-row-reverse gap-x-10'>
          {/* Texto a la derecha */}
          <aside className='text-center lg:text-left'>
            <h1 className='text-app-primary-600 font-semibold text-5xl'>{ImagenIaData.header.title}</h1>
            <p className='mt-4 max-w-[805px] text-lg text-justify lg:text-left text-app-secundary-950 font-semibold'>
              {ImagenIaData.header.subTitle}
            </p>
          </aside>
          
          {/* Imágenes a la izquierda */}
          <section className='flex flex-wrap justify-center mt-6 border border-app-primary-600 rounded-lg'>
            {ImagenIaData.items.map((item, index) => (
              <div key={index} className='w-1/2 p-2'>
                <div className='overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg'>
                  <img
                    src={item.icon}
                    alt={`Experiencia ${index + 1}`}
                    className='w-full h-auto rounded-lg transition-opacity duration-300'
                  />
                </div>
              </div>
            ))}
          </section>
        </section>
      </LayoutImageIA>
    </section>
  );
};

export default ImageIA;