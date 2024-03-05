interface ViewShortenedUrlProps {
  url: string;
  shortUrl: string;
  onReset: () => void;
}

export function ViewShortUrl({url,shortUrl,onReset} : ViewShortenedUrlProps){
    return (
        <>
            <div className="flex justify-center text-center w-full">
              <form>
                <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-[70vw]">
                  <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">Shorten a long link</h3>
                  </div>
                  <div className="flex flex-col gap-4 p-6">
                    <p className="font-bold">Your long URL</p>
                    <div className="relative h-11 w-full min-w-[200px]">
                      <input
                        readOnly
                        type="text"
                        value={url}
                        className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                    </div>
  
                    <p className="font-bold">Snip it easy</p>
                    <div className="relative flex min-w-[200px]">
                      <input
                        readOnly
                        value={`http://localhost:3000/${shortUrl}`}
                        className="peer h-full w-full rounded-md m-[5px] border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-bold text-blue-gray-700 outline outline-0 transition-all disabled:border-0 disabled:bg-blue-gray-50"
                      />
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                    onClick={onReset}
                      data-ripple-light="true"
                      className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Shorten another
                    </button>
                  </div>
                </div>
              </form>
            </div>
        </>
      );
}