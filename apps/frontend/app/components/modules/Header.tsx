import { Link } from "@remix-run/react";
import useScrollBackground from "~/utils/useScrollBackground";

export default function Header() {
  const showBackground = useScrollBackground();

  return (
    <header
      className={`transition-colors ease-in-out delay-250  fixed top-0 w-full ${showBackground ? "bg-white" : "bg-transparent"}  `}
    >
      <nav className="navbar  max-w-screen-xl mx-auto">
        <div className="flex-1 ">
          <Link to="/" className="flex items-center">
            <img
              src={"/logos/Black logo - no background.png"}
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex-none ">
          <Link
            to="/dashboard"
            className={`btn btn-outline btn-white text-green-500 hover:bg-white border-none hidden md:flex`}
          >
            Login
          </Link>
          <Link
            to="/dashboard"
            className={`btn bg-green-500  text-black border-none hidden md:flex`}
          >
            Dashboard
          </Link>

          <button className="btn btn-square btn-ghost text-black md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

{
  /* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Teal to Lime
  </span>
</button>; */
}
