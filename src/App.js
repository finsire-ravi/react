import React, { lazy, Component, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { AiFillCalendar } from "react-icons/ai";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import Login from "./components/Login";
//import Gecories from "./components/Gecories";

const Gecories = lazy(() => {
  return import("./components/Gecories");
});

const Layout = () => {
  return (
    <div id="layoutcomponent">
      <Header />
      <Outlet />
    </div>
  );
};

const appLinkRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restraunts/:resId",
        element: <RestrauntMenu />,
      },
      {
        path: "/gecories",
        element: (
          <Suspense fallback={<h1>Loading-----</h1>}>
            <Gecories />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<RouterProvider router={appLinkRouter} />);
