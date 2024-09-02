import { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

export function Dashboard(): ReactElement {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="stats">Stats</Link> {/* link to stats */}
          </li>
          <li>
            <Link to="settings">Settings</Link> {/* link to settings */}
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
