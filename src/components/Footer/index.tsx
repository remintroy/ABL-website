import { Link } from "react-router-dom";

const Footer = () => {
  const LinkItems = [
    {
      title: "RESOURCES",
      children: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "About",
          to: "/about",
        },
      ],
    },
    {
      title: "USEFUL LINKS",
      children: [
        {
          title: "Contact Us",
          to: "/contact",
        },
        {
          title: "Privacy",
          to: "/privacy",
        },
      ],
    },
    {
      title: "LEGAL",
      children: [
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
      ],
    },
  ];

  return (
    <footer className="bg-white border border-t-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="/favicon.ico" className="h-8 mr-3" alt="ABL Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                ABL Digital Technologies Pvt . LTd
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {LinkItems.map((titles) => {
              return (
                <div key={titles.title}>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    {titles.title}
                  </h2>
                  <ul className="text-gray-500  font-medium">
                    {titles.children.map((links) => {
                      return (
                        <li className="mb-4">
                          <Link to={links.to} className="hover:underline">
                            {links.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:underline">
              ABL Digital Technologies Pvt . LTd
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
