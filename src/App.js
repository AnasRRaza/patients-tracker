import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
