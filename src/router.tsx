// router.tsx
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Dashboard } from "./Components/Dashboard";
import Stats from "./Components/Stats";
import Settings from "./Components/Settings";

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
            element: <Stats />, // Renders Stats component when URL is "/dashboard/stats"
          },
          {
            path: "settings",
            element: <Settings />, // Renders Settings component when URL is "/dashboard/settings"
          },
        ],
      },
    ],
  },
]);

export default router;
