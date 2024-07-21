// Don't change the name of the 'App'
// function and keep it a named export

import Form from "./components/Form";
import react, { useRef } from "react";

export default function App() {
  const formRef = useRef();
  function handleRestart() {
    formRef.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={formRef} />
    </div>
  );
}
