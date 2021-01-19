import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
//import FunctionClick from "./components/FunctionClick";

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}

      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Ryan" heroName="Batman">
        <p> this is children props</p>
      </Greet>
      <Greet name="Tiffany" heroName="super women">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Hillary" heroName="wonder women" />

      <Welcome name="Ryan" heroName="Batman" /> */}
      {/* <Welcome name="Tiffany" heroName="super women" />
      <Welcome name="Hillary" heroName="wonder women" /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
