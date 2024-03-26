import { worksans } from '@/app/fonts';

export function AboutSection() {
  return (
    <section className="bg-gray-900 text-white h-full" id="about">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>

          <p className={`${worksans.className} antialiased mt-4 text-gray-300`}>
            Welcome to SNIPITLY, your reliable companion in link simplification and enhancing your browsing experience. In a world where information moves at the speed of light, we believe in making
            the web more accessible, efficient, and easy to manage.
          </p>
          <p className={`${worksans.className} antialiased mt-4 text-gray-300`}>
            At SNIPITLY, we take pride in offering an innovative solution for link management, allowing you to transform long and complex URLs into concise and user-friendly addresses. Our platform is
            designed with the premise of simplifying how you share and access information online, providing you with complete control over your links.
          </p>
        </div>

        <h3 className="text-2xl font-bold sm:text-3xl pt-2">Why Choose SNIPITLY?</h3>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <i className="fa-solid fa-puzzle-piece"></i>
            </span>

            <div>
              <h2 className="text-lg font-bold">Ease of Use.</h2>

              <p className={` ${worksans.className} antialiased mt-1 text-sm text-gray-300`}>
                Our intuitive and straightforward interface lets you shorten your URLs with just a few clicks. Whether you&apos;re a casual user or a digital marketing professional, we&apos;ve crafted an
                experience that suits everyone.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <i className="fa-solid fa-chart-simple"></i>
            </span>

            <div>
              <h2 className="text-lg font-bold">Detailed Analytics.</h2>

              <p className={`${worksans.className} antialiased mt-1 text-sm text-gray-300`}>
                Gain valuable insights into your links' performance with our comprehensive statistics. Track the number of clicks, the geographical location of visitors, and other essential data to
                assess the impact of your links.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <i className="fa-solid fa-paintbrush"></i>
            </span>

            <div>
              <h2 className="text-lg font-bold">Advanced Customization.</h2>

              <p className={`${worksans.className} antialiased mt-1 text-sm text-gray-300`}>
                SNIPITLY is not just about shortening links; we also offer advanced customization options. Personalize shortened URLs with meaningful aliases, adjust privacy settings, and set up
                custom redirects according to your needs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <i className="fa-solid fa-shield"></i>
            </span>

            <div>
              <h2 className="text-lg font-bold">Top-notch Security.</h2>

              <p className={`${worksans.className} antialiased mt-1 text-sm text-gray-300`}>
                We prioritize your online security. All links shortened through SNIPITLY are constantly scanned and monitored to ensure protection against potential threats.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <i className="fa-solid fa-people-group"></i>
            </span>

            <div>
              <h2 className="text-lg font-bold">Efficient Collaboration.</h2>

              <p className={`${worksans.className} antialiased mt-1 text-sm text-gray-300`}>
                Simplify collaboration by sharing links more effectively. Our service facilitates the management and tracking of shared links in a team, ideal for collaborative projects and marketing
                campaigns.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <i className="fa-solid fa-headphones"></i>
            </span>

            <div>
              <h2 className="text-lg font-bold">Exceptional Customer Support.</h2>

              <p className={`${worksans.className} antialiased mt-1 text-sm text-gray-300`}>
                Our support team is always ready to assist you. Whether you have questions about using the platform or need technical assistance, we're here to provide you with a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
