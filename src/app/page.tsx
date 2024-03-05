'use client';
import app from '../../firebaseConfig';
import { FormShortener } from './formShortener';

export default function Home() {
  app;
  return (
    <>
      <main className="h-screen bg-darkHome flex flex-col justify-center text-center">
        <FormShortener />
      </main>
    </>
  );
}
