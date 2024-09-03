// router.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "./App";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Dashboard } from "./Components/Dashboard";
import Stats from "./Components/Stats";
import Settings from "./Components/Settings";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoutes";
import UserProfile from "./Components/UserProfile";

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
        path: "login",
        element: <Login />, // Login route
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
        element: <UserProfile />, // route with dynamic parameter
      },
      {
        path: "old-home",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
