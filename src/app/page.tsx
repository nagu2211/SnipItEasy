'use client';
import app from '../../firebaseConfig';
import { FormShortener } from './formPage/formShortener';
import { Banner } from './bannerHome/banner';
import { AboutSection } from './about/about';
import { FAQsection } from './FAQs/FAQs';

export default function Home() {
  app;
  return (
     <main className="h-full">
      <Banner/>
      <FormShortener/> 
      <AboutSection/>
      {/* <FAQsection/> */}
     </main>
  )
  }