// set up router
import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "./App";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Dashboard } from "./Components/Dashboard";
import Stats from "./Components/Stats";
import Settings from "./Components/Settings";
import NotFound from "./Components/NotFound";
import { useState } from "react";

// exercise 4
const LoginApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
      {
        path: "dashboard",
        element: <Dashboard />, // Dashboard is the parent route
        children: [
          // Nested routes within Dashboard
          {
            path: "stats",
            element: <Stats />, // /dashboard/stats
          },
          {
            path: "settings",
            element: <Settings />, // /dashboard/settings
          },
        ],
      },
      {
        // exercise 3
        path: "old-home",
        element: <Navigate to="/home" replace />,
      },
      // catch all route for unspecified URLs
      {
        path: "*",
        element: <NotFound />, // display not found for all undefined paths
      },
    ],
  },
]);

export default router;
