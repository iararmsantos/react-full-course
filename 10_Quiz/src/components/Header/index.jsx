import React from "react";
import quizLogo from "../../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img
        src={quizLogo}
        alt="Notebook to take notes of the questions and answers"
      />
      <h1>ReactQuiz</h1>
    </header>
  );
};

export default Header;
