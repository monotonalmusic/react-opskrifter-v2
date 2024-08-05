import { useState } from "react";
import Button from "./components/Button";
import Message from "./components/Message";
import HelloWorld from "./components/HelloWorld";
import RenderLoggerComponent from "./components/RenderMe";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <HelloWorld />
        <Message name="Bob" />
        <Button count={count} setCount={setCount} />
        <RenderLoggerComponent />
      </div>
    </>
  );
}

export default App;
