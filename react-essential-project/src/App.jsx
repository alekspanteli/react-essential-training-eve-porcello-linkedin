import "./App.css";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </>
  );
};

const Home = () => {
  return (
    <>
      <Nav />
      <h1>Home</h1>
    </>
  );
};

export const History = () => {
  return (
    <>
      <h1>History</h1>
    </>
  );
};

export const About = () => {
  return (
    <>
      <Nav />
      <h1>About</h1>
    </>
  );
};

export const Contact = () => {
  return (
    <>
      <Nav />
      <h1>Contact</h1>
    </>
  );
};

export const App = () => {
  return (
    <>
      <Home />
    </>
  );
};
