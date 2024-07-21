import { useRef, useState } from "react";

export default function Player() {
  //refs: useRef hook - allow access to any property of the element where it is attached
  const inputName = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick(event) {
    setPlayerName(inputName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
