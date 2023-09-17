import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSidbar] = useState(false);

  const LinkItems = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Privacy",
      to: "/privacy",
    },
    {
      title: "Terms & Conditions",
      to: "/terms",
    },
    {
      title: "Portfolio",
      to: "/portfolio",
    },
    {
      title: "Cancelation and Refund",
      to: "/cancelation_refund",
    },
    {
      title: "Contact Us",
      to: "/contact",
    },
  ];

  const LinkButton = ({ title, to }: { title: string; to: string }) => {
    return (
      <Link
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
        to={to}
      >
        {title}
      </Link>
    );
  };

  return (
    <>
      <nav className="p-2 border border-gray-200">
        <div className="container flex justify-between items-center">
          <Link
            to={"/"}
            className="flex flex-wrap items-center justify-between wrap"
          >
            <img className="h-14" src="/logo.png" alt="ABL Logo" />
            <span className="hidden self-center text-2xl font-semibold whitespace-nowrap ">
              ABL
            </span>
          </Link>

          <div className="cursor-pointer select-none mr-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span
              className="material-symbols-outlined"
              onClick={() => setShowSidbar((pre) => !pre)}
            >
              menu
            </span>
          </div>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              {LinkItems.map((e) => {
                return (
                  <li key={e.title}>
                    <LinkButton title={e.title} to={e.to} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {showSidebar && (
        <div
          onClick={() => setShowSidbar((pre) => !pre)}
          className="bg-transparent fixed z-30 top-0 left-0 bottom-0 right-0"
        ></div>
      )}

      {showSidebar && (
        <nav
          className={`transition-all .3s fixed z-40 top-0 left-${
            showSidebar ? "0" : "[-100%] "
          } bottom-0 p-7 min-w-[300px] bg-white`}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold">PAGES</h3>
            <div
              onClick={() => setShowSidbar((pre) => !pre)}
              className="cursor-pointer select-none inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>
          <ul className="flex flex-col gap-3 mt-6">
            {LinkItems.map((e) => {
              return (
                <li key={e.title} onClick={() => setShowSidbar(false)}>
                  <LinkButton title={e.title} to={e.to} />
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
