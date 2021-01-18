import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Greet name="Ryan" heroName="Batman">
        <p> this is children props</p>
      </Greet>
      <Greet name="Tiffany" heroName="super women">
        <button>Action</button>
      </Greet>
      <Greet name="Hillary" heroName="wonder women" />

      <Welcome name="Ryan" heroName="Batman" />
      <Welcome name="Tiffany" heroName="super women" />
      <Welcome name="Hillary" heroName="wonder women" />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
