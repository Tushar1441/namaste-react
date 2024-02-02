import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantPage from "./components/RestaurantPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import User from "./components/User";
import UserContext from "./utils/UserContext.js";

const User = lazy(() => import("./components/User"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Make an api call and send usename and password
    const data = {
      name: "Tushar Bansal",
    };

    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/user",
        element: (
          <Suspense fallback={<h1>Loading User Info...</h1>}>
            <User name={"Tushar Bansal"} location={"Chandigarh, India"} />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
