import { Link } from "react-router-dom";
import "./index.css";
import { Outlet } from "react-router";

export default function App() {
  return (
    <main className="container">
      <nav className="navbar">
        <Link to="/home">home</Link>
        <Link to="/tool">tool</Link>
        <Link to="/work">work</Link>
        <Link to="/quickdoc">quickdoc</Link>
      </nav>
      <Outlet />
    </main>
  );
}
