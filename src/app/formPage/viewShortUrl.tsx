interface ViewShortenedUrlProps {
  url: string;
  shortUrl: string;
  onReset: () => void;
}

export function ViewShortUrl({ url, shortUrl, onReset }: ViewShortenedUrlProps) {
  return (
    <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <p className="text-center text-lg font-medium">Your long URL</p>

      <div>
        <div className="relative">
          <input type="text" readOnly value={url} className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <i className="fa-solid fa-link text-gray-400 size-4"></i>
          </span>
        </div>
      </div>
      <p className="text-center text-lg font-medium">SNIPITLY</p>
      <div className="relative flex">
        <input type="text" readOnly value={`http://localhost:3000/${shortUrl}`} className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" />
        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <i className="fa-solid fa-link text-gray-400 size-4"></i>
        </span>
      </div>

      <button onClick={onReset} type="submit" className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
        Shorten another
      </button>
    </form>
  );
}
