import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["rubel", "manna", "salalman shah"];
  return (
    <div className="App">
      <ul>
        <li>{nayoks[0]}</li>
        <li>{nayoks[1]}</li>
        <li>{nayoks[1]}</li>
      </ul>
      <Person name={nayoks[1]} profession="Nayak" />
      <Person name={nayoks[0]} profession="saka khan" />
    </div>
  );
}

function Person(props) {
  console.log(props);
  const singleStyle = {
    backgroundColor: "green",
    color: "red",
  };
  return (
    <div style={singleStyle}>
      <h1>{props.name}</h1>
      <h4> {props.profession}</h4>
    </div>
  );
}
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

export default App;
