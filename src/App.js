import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const studentStyle = {
    borderRadius: "5px",
    border: "2px solid red",
    marginBottom: "10px",
  };

  return (
    <div className="Student">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const clickHandle = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const clickHandleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={clickHandle}>Increase</button>
      <button onClick={clickHandleDecrease}>Decrease</button>
    </div>
  );
}

export default App;

/* 
function Friend(props) {
  return (
    <div>
      <h6>{props.name}</h6>
      <h6>{props.profession}</h6>
    </div>
  );
} */

/* function Student(props) {
  return (
    <div>
      <p>
        {props.name} and {props.profession}
      </p>
    </div>
  );
} */

/* function Student(props) {
  return (
    <div className="student">
      <h2>name: {props.name}</h2>
      <h2>university: {props.university}</h2>
      <h2>country: {props.country}</h2>
    </div>
  );
} */

/* const cinamas = [
  {
    name: "padda nodir maji",
    naok: "kopila",
  },
  {
    name: "maji",
    naok: "Arona",
  },
  {
    name: "mastan",
    naok: "jasim",
  },
]; */

/* const students = [
  {
    name: "Murad",
    university: "IUB",
    country: "Denmark",
  },
  {
    name: "Mamun",
    university: "Ncc",
    country: "Bangladesh",
  },
]; */
