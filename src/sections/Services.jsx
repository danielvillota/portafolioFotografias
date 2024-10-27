import React from 'react';
import { ServiceData } from '../data/data';

export const Services = () => {
  return (
    <section className='px-8 font-roboto lg:px-0'>
      <aside id='servicios' className='flex flex-col items-center'>
        <h1 className='font-semibold text-5xl text-app-primary-600'>{ServiceData.header.title}</h1>
        <p className='mt-4 max-w-[805px] text-lg text-justify text-app-secundary-950 font-semibold'>
          {ServiceData.header.subTitle}
        </p>
      </aside>

      <section className='mt-4 py-2 border border-app-primary-600 rounded-xl'>
        <div className='flex flex-wrap justify-center'>
          {/* Cuadrícula de imágenes en dos columnas */}
          {ServiceData.items.map((item, index) => (
            <div key={index} className='w-1/2 p-2'>
              <img
                src={item.icon}
                alt={`Servicio ${index + 1}`}
                className='w-full h-auto rounded-lg transition-transform duration-700 transform hover:scale-125 hover:translate-x-1 hover:translate-y-1'
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Services;
