import copy from 'clipboard-copy';
import { useState, useEffect } from 'react';
interface linksLs {
  links: Array<[string, string, string]>;
}

export function ModalUrls() {
  const [links, setLinks] = useState<Array<[string, string, string]>>([]);

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('links') || '[]');
    setLinks(storedLinks);
  }, []);

  const handleCopy = (shortUrl: string) => {
    copy(`http://localhost:3000/${shortUrl}`);
  };

  const handleDelete = (shortUrl: string) => {
    const updatedLinks = links.filter((link: any) => link[2] !== shortUrl);
    setLinks(updatedLinks);
    localStorage.setItem('links', JSON.stringify(updatedLinks));
  };

  return (
    <section>
      <div
        id="crypto-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-[45rem] max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-lg font-semibold text-gray-900 ">MY URL'S</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center "
                data-modal-toggle="crypto-modal"
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <p className="text-sm font-normal text-gray-500 ">Connect with one of our available wallet providers or create a new one.</p>
              <ul className="my-4 space-y-3">
                {links.map(([domain, url, shortUrl], index) => (
                  <li key={index}>
                    <div className="relative rounded-lg border border-gray-200 shadow-lg">
                      <div className="flex items-center gap-4 p-4">
                        <img alt="favicon of webpage" src={`https://${domain}/favicon.ico`} className="size-12 rounded-lg object-cover" />

                        <div>
                          <p className="font-medium text-gray-900">http://localhost:3000/{shortUrl}</p>

                          <p className="line-clamp-1 text-sm text-blue-600">{url}</p>
                          <div className="flex justify-start pt-2">
                            <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                              <a className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative" href={`http://localhost:3000/${shortUrl}`} target="_blank">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                              </a>

                              <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative" onClick={() => handleCopy(shortUrl)}>
                                <i className="fa-solid fa-copy"></i>
                              </button>

                              <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative" onClick={() => handleDelete(shortUrl)}>
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div>
                <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline ">
                  <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Why do I need to connect with my wallet?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
