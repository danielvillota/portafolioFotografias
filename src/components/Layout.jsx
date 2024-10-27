import React from 'react'

export const LayoutHeader = ({children}) => {
  return (
    <div className='flex justify-between items-center mx-auto px-4 max-w-[1140px] font-roboto xl:px-0'>
      {children}
    </div>
  );
};

export const LayoutHero = ({ children }) => {
  return <main className='mx-auto max-w-[1000px] lg:px-20'>{children}</main>;
};

export const Layout = ({ children }) => {
  return <main className='mx-auto max-w-[990px]'>{children}</main>;
};

export const LayoutExperiencie = ({ children }) => {
  return <main className='mx-auto max-w-[990px] lg:px-5'>{children}</main>;
};

export const LayoutImageIA = ({ children }) => {
  return <main className='mx-auto max-w-[990px] lg:px-5'>{children}</main>;
};

export const LayoutProject = ({ children }) => {
  return <main className='mx-auto max-w-[990px] lg:px-5'>{children}</main>;
};

export const LayoutHobbie = ({ children }) => {
  return <main className='mx-auto max-w-[990px] lg:px-5'>{children}</main>;
};

export const LayoutContacto = ({ children }) => {
  return <main className='mx-auto max-w-[990px] lg:px-5'>{children}</main>;
};

export const LayoutTextura = ({ children }) => {
  return <main className='mx-auto max-w-[990px] lg:px-5'>{children}</main>;
};

export const LayoutFooter = ({children}) => {
  return (
    <div className='flex justify-center items-center mx-auto px-4 max-w-[1140px] font-roboto xl:px-0 lg:justify-between'>
      {children}
    </div>
  );
};
