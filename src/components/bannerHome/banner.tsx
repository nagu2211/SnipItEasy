import Image from "next/image";

export function Banner() {
  return (
    <section className="text-white overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center mt-16" id="banner">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <span className="sm:block"> URL Shortener </span>
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent sm:text-5xl">Form solid online connections.</h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Shorten, customize, and track your links effortlessly with our powerful URL shortener. Simplify sharing and enhance your online experience
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#getStarted"
            >
              Get Started
            </a>

            <a className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href="#about">
              Learn More
            </a>
          </div>
        </div>
      </div>
    <Image
    src="/imageHome.jpg"
    alt="Friends Sharing"
    width={850}
    height={1050}
    className="h-full w-full object-cover object-center sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
    priority
    />
      
    </section>
  );
}
