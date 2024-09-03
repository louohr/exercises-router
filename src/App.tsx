import { useState } from "react";
import { Outlet } from "react-router-dom";

/* export function App() {
  return (
    <div>
      <Outlet /> {/* This is where child routes will render */
/*     </div>
  );
}

export default App; */

// exercise 4
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // log in
  const handleLogin = () => setIsLoggedIn(true);

  // log out
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <h1>Welcome to the App</h1>
      {/* Buttons to demonstrate login and logout functionality */}
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}

      {/* Outlet is where the nested routes will render */}
      <Outlet context={{ isLoggedIn }} />
    </div>
  );
};

export { App };
