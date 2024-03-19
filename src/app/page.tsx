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
  const [links, setLinks] = useState<Array<[string, string]>>([]);

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links") || "[]");
    setLinks(storedLinks);
  }, []);
  return (
     <main className="h-full">
      <Navbar/>
      <ModalUrls links={links}/>
      <Banner/>
      <FormContainer/> 
      <AboutSection/>
      <FAQsection/>
      <Footer/>
     </main>
  )
  }