import { useState } from 'react';
import copy from 'clipboard-copy';

interface linksLs {
  links: Array<[string, string]>;
}

export function ModalUrls({ links }: linksLs) {
  const handleCopy = (shortUrl: string) => {
    copy(`http://localhost:3000/${shortUrl}`);
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
              <h3 className="text-lg font-semibold text-gray-900 ">Connect wallet</h3>
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
                {links.map(([url, shortUrl], index) => (
                  <li>
                    <div className="relative rounded-lg border border-gray-200 shadow-lg" key={index}>
                      <button className="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1">
                        <span className="sr-only">Close</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      <div className="flex items-center gap-4 p-4">
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                          className="size-12 rounded-lg object-cover"
                        />

                        <div>
                          <p className="font-medium text-gray-900">http://localhost:3000/{shortUrl}</p>

                          <p className="line-clamp-1 text-sm text-gray-500">{url}</p>
                          <div className="flex justify-center ">
                            <a
                              className="inline-block rounded-full border border-blue-600 bg-blue-600 p-3 text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 mx-1"
                              href={`http://localhost:3000/${shortUrl}`}
                              target="_blank"
                            >
                              <i className="fa-solid fa-share"></i>
                            </a>
                            <button
                              className="inline-block rounded-full border border-blue-600 p-3 text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 mx-1"
                              onClick={() => handleCopy(shortUrl)}
                            >
                              <i className="fa-solid fa-copy"></i>
                              <span className="px-1">COPY</span>
                            </button>
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
