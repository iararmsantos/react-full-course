import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      //destruct here copy the previous values to this return
      // then I updated the value that will change
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!isInputValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
      {isInputValid && <ResultsTable input={userInput} />}
    </>
  );
}

export default App;
