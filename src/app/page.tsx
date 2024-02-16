"use client"

import {useState,useRef} from "react"

export default function Home() {

  const inputRef = useRef<HTMLInputElement>(null);
  const [shortURL, setShortUrl] = useState("");

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    const url = inputRef.current?.value;
    fetch('/api',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(url)
    }).then((res) => res.json())
    .then((data) => {setShortUrl(data.shortUrl)});
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <form  onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" placeholder="URL"/>
          <button className="btn bg-slate-500">Acorta</button>
          <span >la url es : {shortURL}</span>
        </form>
      </div>
    </main>
  );
}
