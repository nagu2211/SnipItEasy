"use client"

import {useState} from "react"
import {collection,addDoc, getFirestore} from "firebase/firestore"
import app from "../../firebaseConfig"
import URL from "./url"

export default function Home() {
  app
  const [urlId, setUrlId] = useState("")
  const [url,setUrl] = useState("")
  const shortUrl = Math.random().toString(36).substring(2, 5);
  const db = getFirestore();

  
 const handleSubmit = (e:React.FormEvent) => {
     e.preventDefault();
    addDoc(linkCollection,linkShort).then(({id}) => setUrlId(id));
   }

   const linkShort = {
    url,
    shortUrl,
   }

   const linkCollection = collection(db,"link")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <form  onSubmit={handleSubmit}>
          <input type="text" placeholder="URL" onChange={(e)=>setUrl(e.target.value)}/>
          <button className="btn bg-slate-500">Acorta</button>
        <URL/>
        </form>
      </div>
    </main>
  );
}
