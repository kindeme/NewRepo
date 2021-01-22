import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import MouseContainer from "./components/MouseContainer";

function App() {
  return (
    <div className="App">
      <DataFetching />
      {/* <MouseContainer /> */}
    </div>
  );
}

export default App;
