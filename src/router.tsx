import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "./App";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { Dashboard } from "./Components/Dashboard";
import Stats from "./Components/Stats";
import Settings from "./Components/Settings";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoutes";
import UserProfile from "./Components/UserProfile";
import Layout from "./Components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ), // Protect dashboard and nested routes
        children: [
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
        path: "user/:id",
        element: <UserProfile />, // Route with dynamic parameter
      },
      {
        path: "old-home",
        element: <Navigate to="/" replace />, // Redirect old-home to home
      },
      {
        path: "*",
        element: <NotFound />, // Catch-all for 404 Not Found
      },
    ],
  },
]);

export default router;
