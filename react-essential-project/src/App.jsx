import "./App.css";

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <p>Header goes here</p>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <p>Main goes here</p>
    </main>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
