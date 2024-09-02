// set up router object
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
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
    ],
  },
]);

export default router;
