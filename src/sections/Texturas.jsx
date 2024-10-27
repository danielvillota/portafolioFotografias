import React from 'react';
import { TexturaData } from '../data/data';
import { LayoutTextura } from '../components/Layout';

export const Textura = () => {
  return (
    <section id='portafolio' className='px-8 text-app-primary-600 font-roboto'>
      <LayoutTextura>
        <div className='text-center py-4'>
          <h3 className='text-app-primary-600 font-semibold text-5xl'>{TexturaData.header.title}</h3>
          <p className='text-app-secundary-950 font-semibold mt-3 text-lg text-justify'>{TexturaData.header.subTitle}</p>
        </div>
        <section className='mt-4 py-2 border border-app-primary-600 rounded-xl'>
          <div className='flex flex-wrap justify-center'>
            {/* Cuadrícula de imágenes en dos columnas */}
            {TexturaData.items.map((item, index) => (
              <div key={index} className='w-1/2 p-2'>
                <img
                  src={item.icon}
                  alt={`Servicio ${index + 1}`}
                  className='w-full h-[800px] object-cover rounded-lg transition-transform duration-700 transform hover:scale-125 hover:translate-x-1 hover:translate-y-1'
                />
              </div>
            ))}
          </div>
        </section>
      </LayoutTextura>
    </section>
  );
};

export default Textura;