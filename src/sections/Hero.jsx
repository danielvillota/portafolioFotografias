import React from 'react'
import { LayoutHero } from '../components/Layout'
import { HeroData } from '../data/data'

export const Hero = () => {
  return (
    <section id='inicio' className='pt-[250px] pb-[150px] font-roboto bg-custom'>
        <LayoutHero>
        <section className='flex flex-col items-center lg:flex-row lg:justify-between lg:items-end'>
          <aside className='text-center lg:text-left'>
            <section className='px-4 lg:w-[488px] lg:px-0'>
              <h1 className='font-bold text-4xl text-app-primary-700 break-words whitespace-pre-line'>
                {HeroData.title}
              </h1>
              <p className='px-10 mt-4 text-lg text-app-secundary-950 font-semibold text-justify lg:px-0'>
                {HeroData.subTitle}
              </p>
            </section>
            <section className='mt-4'>
              <p className='font-bold text-2xl text-app-primary-900 break-words whitespace-pre-line'>Podcast #1</p>
              <audio controls className='w-full mx-auto'>
                <source src={HeroData.audioUrl} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </section>
            <section className='flex flex-row gap-x-4 gap-y-4 justify-center mt-12 px-6 sm:px-0 sm:gap-y-0 sm:gap-x-4 sm:flex-row lg:justify-start'>
              <button className='flex flex-row items-center justify-center gap-x-2 px-5 py-[10px] text-white font-semibold bg-app-primary-900 border border-app-primary-900 rounded-[32px]'>
                <span>{HeroData.btnTextDownloadCv}</span>
                
              </button>
            </section>
          </aside>
          <aside className='mt-12 border border-app-primary-900 rounded-2xl max-w-[425px] h-[400px]'>
          <img
            src={HeroData.iconHero}
            alt='ui'
            className='rotate-12 max-w-[425px] h-[400px] shadow-2xl sm:px-0 lg:mt-0 lg:rotate-12 rounded-2xl'
          />
          </aside>
        </section>
        </LayoutHero>
    </section>
  )
}
