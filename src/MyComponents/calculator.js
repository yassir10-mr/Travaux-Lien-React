import React, { useState } from "react";
import "./calculator.css";

const App = () => {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="cont-calc">
      <div className={`calculator ${darkMode ? "dark" : "light"}`}>
        <div className="mode-toggle">
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleDarkMode}
              checked={darkMode}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="output">
          <input type="text" value={input} disabled />
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={handleEvaluate}>=</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
};

export default App;
