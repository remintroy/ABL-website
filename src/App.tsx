import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
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
