import { useState } from 'react'
import Header from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Layout} from '../components/Layout'
import { Services } from '../sections/Services'
import { Experience } from '../sections/Experience'
import Project from '../sections/Project'
import Hobbie from '../sections/Hobbie'
import Contacto from '../sections/Contacto'
import Footer from '../sections/Footer'
import ImageIA from '../sections/ImageIA'
import Textura from '../sections/Texturas'


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Layout>
        <Services/>
      </Layout>
      <Experience/>
      <Project/>
      <Textura/>
      <Hobbie/>
      <ImageIA/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App
