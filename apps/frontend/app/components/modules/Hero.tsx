import { Link } from "@remix-run/react";

export default function Hero() {
  return (
    <section className="bg-green-500 py-32 lg:py-0 bg-hero-pattern-alternative bg-no-repeat bg-cover">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-gray-900 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center sm:text-left">
            Let <span className=" text-green-500">Syphtr</span> take care of
            your talent pipelines
          </h1>
          <p className="max-w-2xl mb-11 font-light md:text-lg text-gray-900 text-center sm:text-left m-auto">
            Syphtr is a true pay-as-you-go recruiting service for hiring your
            GTM/Revenue Generating teams - Utilising the most advanced sourcing
            software available
          </p>

          <Link
            to="/"
            className=" m-auto w-full inline-flex items-center sm:w-auto justify-center px-5 py-3 text-base font-medium text-center text-gray-900  rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  bg-green-500 "
          >
            Get in touch
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
          <img src="/search-on-web.svg" alt="mockup" />
        </div>
      </div>
    </section>
  );
}
