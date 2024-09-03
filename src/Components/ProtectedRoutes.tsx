// ProtectedRoute.tsx
import { ReactNode } from "react";
import { Navigate, useOutletContext } from "react-router-dom";

// Type definition for context
interface OutletContext {
  isLoggedIn: boolean;
}

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Accessing isLoggedIn state from Outlet context
  const { isLoggedIn } = useOutletContext<OutletContext>();

  // Redirect to login page if not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Render children if logged in
  return <>{children}</>;
};

export default ProtectedRoute;
