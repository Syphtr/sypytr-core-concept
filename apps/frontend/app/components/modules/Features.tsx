// import { Link } from "@remix-run/react";

export default function Features() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard"
        />
        <img
          className="w-full hidden dark:block"
          src="robot-finding-data.svg"
          alt="dashboard"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Who is Syphtr for?
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Our specialism is sourcing/hiring GTM/Revenue generating teams
            (Sales, Pre-Sales, Business Development and Professional Services)
            in the following subcategories within Enterprise Software/SaaS:
          </p>
          <ul className="text-gray-400">
            <li className="text-gray-400 flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Data Quality
            </li>
            <li className="text-gray-400">- Data Preparation</li>
            <li className="text-gray-400">- Data Governance</li>
            <li className="text-gray-400">- Master Data Management</li>
            <li className="text-gray-400">- PIM</li>
            <li className="text-gray-400">- Data Science</li>
            <li className="text-gray-400">- Machine Learning</li>
            <li className="text-gray-400">- BI and Analytics</li>
            <li className="text-gray-400">
              - Database Management Systems (DBMS)
            </li>
          </ul>
        </div>
      </div>

      {/* FEATURE 2 */}

      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard"
        />
        <img
          className="w-full hidden dark:block order-2"
          src="explore.svg"
          alt="dashboard"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Why use Syphtr if I already have an internal TA team with sourcing
            tools?
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            We are lucky enough to have access to the most advanced sourcing
            tools available for GTM hiring. These tools are developed and
            created by Syphtr and they allow us to accurately filter/find
            candidates whilst also extracting vital data points to provide a
            report card for every candidate we source for you. 
          </p>
        </div>
      </div>

      {/* FEATURE 3 */}

      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard"
        />
        <img
          className="w-full hidden dark:block"
          src="data.svg"
          alt="dashboard"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Where do you get your candidate data from?
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Our candidate data is sourced from multiple providers. We have
            access to over 55m candidate records across the UK and many European
            countries. We have partnerships with public data providers and we
            combine this with proprietary data sets that we have manually
            created.
          </p>
        </div>
      </div>
    </section>
  );
}
