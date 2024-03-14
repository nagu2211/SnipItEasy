import { useState } from "react";
import copy from "clipboard-copy"

interface ViewShortenedUrlProps {
  url: string;
  shortUrl: string;
  onReset: () => void;
}

export function ViewShortUrl({ url, shortUrl, onReset }: ViewShortenedUrlProps) {
  
const handleCopy = (e : React.FormEvent) => {
  e.preventDefault()
  copy(`http://localhost:3000/${shortUrl}`)
};

  return (
    <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <p className="text-center text-lg font-bold">Your long URL</p>

      <div>
        <div className="relative">
          <input type="text" readOnly value={url} className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <i className="fa-solid fa-link text-gray-400 size-4"></i>
          </span>
        </div>
      </div>
      <p className="text-center text-lg font-bold">
        <span>
          <i className="fa-solid fa-wand-magic-sparkles pr-1"></i>
        </span>
        SNIPITLY
      </p>
      <div className="relative flex">
        <input type="text" readOnly value={`http://localhost:3000/${shortUrl}`} className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" />
        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <i className="fa-solid fa-link text-gray-400 size-4"></i>
        </span>
      </div>

      <div className="flex justify-center ">
        <a
          className="inline-block rounded-full border border-blue-600 bg-blue-600 p-3 text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 mx-1"
          href={`http://localhost:3000/${shortUrl}`}
          target="_blank"
        >
          <i className="fa-solid fa-share"></i>
        </a>
        <button className="inline-block rounded-full border border-blue-600 p-3 text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 mx-1" onClick={handleCopy}>
          <i className="fa-solid fa-copy"></i>
          <span className="px-1">COPY</span>
        </button>
        <button onClick={onReset} type="submit" className="inline-block rounded-full border border-blue-600 p-3 text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 mx-1">
        Shorten another
      </button>
      </div>

      
    </form>
  );
}
