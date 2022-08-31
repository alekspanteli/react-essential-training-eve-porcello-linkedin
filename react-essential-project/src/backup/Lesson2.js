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
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
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

const dishes = ["Food 1", "Food 2", "Food 3"];
// const fishes = ["Fish 1", "Fish 2", "Fish 3"];

const dishObjects = dishes.map((dish, i) => ({
  id: i,
  title: dish,
}));

const App = () => {
  return (
    <>
      <Header name="Alex" />
      <Main adjective="Great" items={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </>
  );
};

export default App;
