import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
// import About from "./components/Data";
// import Contact from "./components/Transaction";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import useOnline from "./utils/useOnline";
import UserOffline from "./components/UserOffline";
import Shimmer from "./components/Shimmer";

// Lazy Loading
const Data = lazy(() => import("./components/Data/Data"));
const Transaction = lazy(() => import("./components/Transaction/Transaction"));

const AppLayout = () => {
  return (
    <>
      {!useOnline() ? (
        <UserOffline />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/data",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Data />
          </Suspense>
        ),
      },
      {
        path: "/transaction",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Transaction />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
