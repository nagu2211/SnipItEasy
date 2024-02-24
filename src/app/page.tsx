'use client';

import { useState, useRef } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import app from '../../firebaseConfig';

export default function Home() {
  app;
  const inputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const db = getFirestore();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const alias = inputRef.current?.value || Math.random().toString(36).substring(2, 5);
    setShortUrl(alias);
    const linkShort = {
      url,
      shortUrl:alias,
    };
    try {
      await addDoc(linkCollection, linkShort);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  const linkCollection = collection(db, 'link');

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="URL" onChange={(e) => setUrl(e.target.value)} required/>
          <input type="text" ref={inputRef}  placeholder="ALIAS" />
          <button className="btn bg-slate-500">Acorta</button>
          <span>{shortUrl ? `Url : http://localhost:3000/${shortUrl}` : 'Url:'}</span>
        </form>
      </div>
    </main>
  );
}
