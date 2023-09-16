import { Link } from "react-router-dom";

const Navbar = () => {
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
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark: md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent"
        to={to}
      >
        {title}
      </Link>
    );
  };

  return (
    <nav className="p-2 border border-gray-200">
      <div className="container flex justify-between items-center">
        <Link to={"/"} className="flex flex-wrap items-center justify-between">
          <img className="h-14" src="/logo.png" alt="ABL Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            ABL
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          OPEN
        </button>

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
  );
};

export default Navbar;
