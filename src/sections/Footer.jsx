import React from 'react';
import { LayoutFooter } from '../components/Layout';
import { HeaderData, animacionData } from '../data/data';

export const Footer = () => {
  return (
    <section className='mt-20'>
      <footer className='pt-0 w-screen border-t border-app-primary-800 bg-white backdrop-blur-md transition-colors duration-500'>
        <LayoutFooter>
          <img src={HeaderData.logo.icon} alt={HeaderData.logo.title} className='h-24 w-24 hidden md:block' />
          <nav className='hidden'>
            <ul className='flex items-center gap-x-6 font-semibold'>
              {HeaderData.nav.map((item) => (
                <li
                  key={item.id}
                  className={item.title === 'Inicio' ? 'text-app-primary-600 font-bold' : 'text-app-secundary-950'}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </nav>
          
          {/* GIF Centrado */}
          <section className='flex justify-center w-full'>
            <img src={animacionData.animacion2d} alt="Animación" className='w-40 h-40' />
          </section>
          
          <section className='flex items-center justify-center gap-x-4 md:flex md:justify-start'>
            {HeaderData.social.map((item) => (
              <img
                key={item.id}
                src={item.icon}
                alt={item.title}
                className={item.title === 'Instagram' ? 'h-10 w-10' : 'h-16 w-16'}
              />
            ))}
          </section>
        </LayoutFooter>
      </footer>
    </section>
  );
};

export default Footer;
