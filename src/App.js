import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import { ProviderData } from "./components/Store/ContextData";
import CategoryList from "./components/List/CategoryList";
import Filtering from "./components/Filtering/Filtering";
import ActorList from "./components/List/ActorList";
import AddActor from "./components/AddData/AddActor";
function App() {
  return (
    <div className="container">
      <ProviderData>
        <SearchBar />
        <CategoryList />
        <Filtering />
        <AddActor />
        <ActorList />
      </ProviderData>
    </div>
  );
}
export default App;
