// Exercise 4
// Login component triggering the state change in the App component
import { useNavigate, useOutletContext } from "react-router-dom";

// Type definition for context
interface OutletContext {
  isLoggedIn: boolean;
}

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useOutletContext<OutletContext>();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Login Page</h2>
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Log in</button> // log in to home page
      ) : (
        <p>You are already logged in!</p>
      )}
    </div>
  );
};

export default Login;
