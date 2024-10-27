import React from 'react'
import { HobbiesData } from '../data/data'
import { LayoutHobbie } from '../components/Layout'

export const Hobbie = () => {
  return (
    <aside className='flex flex-col mt-40 font-roboto'>
    <LayoutHobbie>
    <section id='hobbies' className='text-center'>
        <aside className='text-center lg:text-center'>
            <h1 className='text-app-primary-600 font-semibold text-5xl'>{HobbiesData.header.title}</h1>
            <p className='mt-4 max-w-[805px] mx-auto text-lg text-justify text-app-secundary-950 font-semibold'>
            {HobbiesData.header.subTitle}
            </p>
        </aside>
    </section>
    <section className='mt-4 py-2 border border-app-primary-600 rounded-xl'>
        <div className='flex flex-wrap justify-center'>
          {/* Cuadrícula de imágenes en dos columnas */}
          {HobbiesData.items.map((item, index) => (
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
    </LayoutHobbie>
    </aside>
  )
}

export default Hobbie
