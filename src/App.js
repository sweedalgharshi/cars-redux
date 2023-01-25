import CarForm from "./component/CarForm";
import CarSearch from "./component/CarSearch";
import CarList from "./component/CarList";
import CarValue from "./component/CarValue";

function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
