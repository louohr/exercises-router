import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <Outlet /> {/* This is where child routes will render */}
    </div>
  );
}

export default App;
