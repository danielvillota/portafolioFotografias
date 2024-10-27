import React from 'react';
import { ProjectData } from '../data/data';
import { LayoutProject } from '../components/Layout';

export const Project = () => {
  return (
    <section id='portafolio' className='px-8 pb-[150px] text-app-primary-600 font-roboto'>
      <LayoutProject>
        <div className='text-center py-4'>
          <h3 className='text-app-primary-600 font-semibold text-5xl'>{ProjectData.header.title}</h3>
          <p className='text-app-secundary-950 font-semibold mt-3 text-lg text-justify'>{ProjectData.header.subTitle}</p>
        </div>
        <section className='mt-4 py-2 border border-app-primary-600 rounded-xl'>
        <div className='flex flex-wrap justify-center'>
          {/* Cuadrícula de imágenes en dos columnas */}
          {ProjectData.items.map((item, index) => (
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
      </LayoutProject>
    </section>
  );
};

export default Project;
