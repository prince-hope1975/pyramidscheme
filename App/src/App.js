import RecursiveComponent from "./components/RecursiveComponent";
import { data } from "./components/RecursiveComponent";

function App() {
  return (
    <div className="App">
     <RecursiveComponent item={data}/>
    </div>
  );
}

export default App;
