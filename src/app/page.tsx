'use client';
import app from '../../firebaseConfig';
import { FormShortener } from '../components/formPage/formShortener';
import { Banner } from '../components/bannerHome/banner';
import { AboutSection } from '../components/about/about';
import { FAQsection } from '../components/FAQs/FAQs';

export default function Home() {
  app;
  return (
     <main className="h-full">
      <Banner/>
      <FormShortener/> 
      <AboutSection/>
      <FAQsection/>
     </main>
  )
  }