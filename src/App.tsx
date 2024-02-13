import { Navigate, RouterProvider } from "react-router";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div
    // className="bg-gradient-to-b from-black from-30% via-amber-950 via-60% to-amber-900 to-90%"
    >
      <div id="header-and-content-container" className="w-3/4 mx-auto">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
