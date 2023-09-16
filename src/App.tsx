import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";

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
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
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
