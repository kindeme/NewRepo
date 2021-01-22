import React from "react";
import "./App.css";
import FRParentInput from "./FRParentInput";
import FocusInput from "./oldComponents/FocusInput";
import ParentCom from "./oldComponents/ParentCom";
import PureComp from "./oldComponents/PureComp";
import RefsDemo from "./oldComponents/RefsDemo";

function App() {
  return (
    <div className="App">
      <FRParentInput />
      {/* <FocusInput /> */}
    </div>
  );
}

export default App;
