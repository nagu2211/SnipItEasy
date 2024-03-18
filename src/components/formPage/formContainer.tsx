import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useRef, useState, useEffect } from 'react';
import { ViewShortUrl } from './viewShortUrl';

export function FormContainer() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState('');
  const [emptyUrl,setEmptyUrl] = useState(false)
  const [shortUrl, setShortUrl] = useState('');
  const db = getFirestore();
  useEffect(() => {
    if (url && shortUrl) {

      const UrlLs = [url,shortUrl]
      const storedLinks = JSON.parse(localStorage.getItem("links") || "[]");
      const updateUrlLs = [...storedLinks,UrlLs]
      localStorage.setItem("links",JSON.stringify( updateUrlLs))
    }
  },[shortUrl]);

  const handleReset = () => {
    setEmptyUrl(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const alias = inputRef.current?.value || Math.random().toString(36).substring(2, 5);
    setShortUrl(alias);
    setEmptyUrl(true);
    const linkShort = {
      url,
      shortUrl: alias,
    };
    try {
      await addDoc(linkCollection, linkShort);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  const linkCollection = collection(db, 'link');

  return (
    <div className="mx-auto max-w-[100%] px-4 py-16 sm:px-6 lg:px-8 lg:h-[83vh] bg-[#f5f6f7]" id="getStarted">
      <div className="mx-auto max-w-[100%]">
        <h1 className="text-center text-5xl font-bold text-blue-600 sm:text-3xl">Shorten a long link</h1>
        <p className="mx-auto mt-4 max-w-md text-center font-bold text-gray-500">Powerful bonds start with just one click</p>
        {emptyUrl ? (
          <ViewShortUrl url={url} shortUrl={shortUrl} onReset={handleReset} />
        ) : (
          <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-bold">Paste a long URL</p>

            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="example : http://www.long-link.org/longLink/link"
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <i className="fa-solid fa-link text-gray-400 size-4"></i>
                </span>
              </div>
            </div>

            <p className="text-center text-lg font-bold">
              <span>
                <i className="fa-solid fa-wand-magic-sparkles pr-1"></i>
              </span>
              Customize your link
            </p>

            <div className="relative flex">
              <input disabled className=" pr-2 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm mr-[10px]" value="snipit.ly/" />
              <input type="text" ref={inputRef} className=" pl-2 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ml-[10px]" placeholder="Enter alias (optional)" />
            </div>

            <button type="submit" className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white" >
              Shorten URL
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
