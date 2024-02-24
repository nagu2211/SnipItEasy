'use client';

import { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import app from '../../firebaseConfig';

export default function Home() {
  app;
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const short = Math.random().toString(36).substring(2, 5);
  const db = getFirestore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const linkShort = {
      url,
      shortUrl: short,
    };
    setShortUrl(short);

    try {
      await addDoc(linkCollection, linkShort);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  const linkCollection = collection(db, 'link');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="URL" onChange={(e) => setUrl(e.target.value)} />
          <button className="btn bg-slate-500">Acorta</button>
          <span>{shortUrl ? `Url : http://localhost:3000/${shortUrl}` : 'Url:'}</span>
        </form>
      </div>
    </main>
  );
}
