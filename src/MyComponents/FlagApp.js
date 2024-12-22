import { useState, useEffect } from "react";
import "./FlagApp.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(
    function () {
      async function Flags() {
        const res = await fetch(`https://restcountries.com/v3.1/all/`);
        const data = await res.json();
        setTodos(data);
      }
      Flags();
    },
    [pages]
  );

  return (
    <div className="app-container">
      <h1 className="app-title">Flags</h1>
      <ul className="flags-list">
        {todos.map((todo, i) => (
          <ListFlag todo={todo} key={i} />
        ))}
      </ul>
    </div>
  );
}

function ListFlag({ todo }) {
  return (
    <li className="flag-item">
      <div className="flag-info">
        <img
          src={todo.flags.svg}
          alt={todo.name.common}
          className="flag-image"
        />
        <h3 className="flag-name">{todo.name.common}</h3>
        <span className="flag-region">Region: {todo.region}</span>
        <span className="flag-capital">Capital: {todo.capital}</span>
      </div>
    </li>
  );
}
