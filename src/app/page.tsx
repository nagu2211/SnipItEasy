'use client';
import app from '../../firebaseConfig';
import { FormContainer } from '../components/formPage/formContainer';
import { Banner } from '../components/bannerHome/banner';
import { AboutSection } from '../components/about/about';
import { FAQsection } from '../components/FAQs/FAQs';

export default function Home() {
  app;
  return (
     <main className="h-full">
      <Banner/>
      <FormContainer/> 
      <AboutSection/>
      <FAQsection/>
     </main>
  )
  }