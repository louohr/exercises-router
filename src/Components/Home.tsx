import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Home(): ReactElement {
  return (
    <div>
      <h1>Home Page</h1>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Home;
