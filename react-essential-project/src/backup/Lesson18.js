import "./App.css";

const items = [
  { name: "Everest 1", elevation: 20000 },
  { name: "Everest 2", elevation: 60000 },
  { name: "Everest 3", elevation: 80000 },
];

const List = ({ data, renderItem, renderEmpty }) => {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <>
      <List
        data={items}
        renderEmpty={<p>This list is empty</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.elevation} ft.
          </>
        )}
      />
    </>
  );
};

export default App;
