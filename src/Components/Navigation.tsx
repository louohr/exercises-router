import { NavLink } from "react-router-dom";
import "./css/Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
