import React, { useState } from 'react';
import { LayoutHeader } from '../components/Layout'
import { HeaderData } from '../data/data'
import { Bars4Icon } from '@heroicons/react/24/solid';



export const Header = () => {

  const [open, setOpen]=useState(false);

  return (
        <header className='fixed z-50 pt-2 pb-4 w-screen border-b border-app-primary-800 bg-white  backdrop-blur-md transition-colors duration-500'>
      <LayoutHeader>
        <img src={HeaderData.logo.icon} alt={HeaderData.logo.title} className='h-48 w-48'/>
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-x-6 font-semibold'>
            {HeaderData.nav.map((item) => (
              <li onClick={()=>setOpen(false)} key={item.id} className={item.title === 'Inicio' ? 'text-app-primary-600 font-bold' : 'text-app-secundary-950'}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <section className='hidden items-center gap-x-4 md:flex'>
          {HeaderData.social.map((item) => (
            <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>
            <img src={item.icon} alt={item.title} className={item.title === 'Instagram' ? 'h-10 w-10' : 'h-16 w-16'} />
            </a>
          ))}
        </section>
        <div onClick={()=>setOpen(!open)} className={`z-[999] ${open ? "text-app-secundary-50":"text-app-primary-600"} text-3xl md:hidden m-5`}>
        <Bars4Icon className='h-7 w-7' name='Menu'/>
        </div>
        
        <div className={`md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-app-primary-600 top-0 right-0 duration-300 ${open ? 'right-0':'right-[-100%]'}`}>
          <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
          {HeaderData.nav.map((item) => (
              <li onClick={()=>setOpen(false)} key={item.id} className={item.title === 'Inicio' ? 'text-white font-bold' : 'text-app-secundary-100'}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </LayoutHeader>
    </header>
  )
}
export default Header