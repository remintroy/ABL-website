import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import PrivacyPage from "./pages/Privacy";
import { TermsPage } from "./pages/Terms";
import PortfolioPage from "./pages/Portfolio";
import CancelationAndRefundPage from "./pages/CancelAndRefund";
import { ContactPage } from "./pages/Contact";
import ErrorPage from "./pages/Error";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "cancelation_refund",
        element: <CancelationAndRefundPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
