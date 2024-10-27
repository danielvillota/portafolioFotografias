import React from 'react';
import { LayoutExperiencie } from '../components/Layout';
import { ExperienceData } from '../data/data';


export const Experience = () => {
  return (
    <section id='experiencia' className='pt-[100px] pb-[150px] font-roboto bg-custom'>
      <LayoutExperiencie>
        <section className='text-center flex flex-col items-center lg:flex-row gap-x-10'>
          <aside className='text-center lg:text-left'>
            <h1 className='text-app-primary-600 font-semibold text-5xl'>{ExperienceData.header.title}</h1>
            <p className='mt-4 max-w-[805px] text-lg text-justify text-app-secundary-950 font-semibold'>
            {ExperienceData.header.subTitle}
            </p>
          </aside>
          <section className='flex flex-wrap justify-center mt-6 border border-app-primary-600'>
            {/* Cuadrícula de imágenes en dos columnas */}
            {ExperienceData.items.map((item, index) => (
              <div key={index} className='w-1/2 p-2'>
                <div className='overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg'>
                  <img
                    src={item.icon}
                    alt={`Experiencia ${index + 1}`}
                    className='w-full h-auto transition-opacity duration-300'
                  />
                </div>
              </div>
            ))}
          </section>
        </section>
      </LayoutExperiencie>
    </section>
  );
};

export default Experience;
