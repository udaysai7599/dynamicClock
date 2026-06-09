import { format } from "date-fns";
import "./App.css";

function App() {
  return (
    <div className="container">
      <p className="clock">
        {format(new Date(), "PPpp")}
      </p>
    </div>
  );
}

export default App;