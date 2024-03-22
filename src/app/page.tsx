'use client';
import { useEffect, useState } from 'react';
import app from '../../firebaseConfig';
import { FormContainer } from '../components/formPage/formContainer';
import { Banner } from '../components/bannerHome/banner';
import { AboutSection } from '../components/about/about';
import { FAQsection } from '../components/FAQs/FAQs';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';
import { ModalUrls } from '@/components/myUrlsModal/modalUrls';

export default function Home() {
  app;
  return (
     <main className="h-full">
      <Navbar/>
      <ModalUrls />
      <Banner/>
      <FormContainer/> 
      <AboutSection/>
      <FAQsection/>
      <Footer/>
     </main>
  )
  }