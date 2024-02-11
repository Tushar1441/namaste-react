import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Help from "./components/Help";
import Error from "./components/Error";
import Cart from "./components/Cart.js";
import RestaurantPage from "./components/RestaurantPage";
// import User from "./components/User";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";


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
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
