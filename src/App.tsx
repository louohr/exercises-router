import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div>
      <Outlet /> {/* This is where child routes will render */}
    </div>
  );
}

export default App;
