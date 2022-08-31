import "./App.css";

const Header = (props) => {
  return (
    <header>
      <p>{props.name}`s header goes here</p>
    </header>
  );
};

const Main = (props) => {
  return (
    <main>
      <p>{props.adjective} asdmain goes here</p>
    </main>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <p>&copy; {props.year} Footer goes here</p>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Header name="Alex" />
      <Main adjective="Great" />
      <Footer year={new Date().getFullYear()} />
    </>
  );
};

export default App;
