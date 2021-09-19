import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <a href="https://www.google.com/">Google.com</a>
      <Person name="Rubel" profession="Nayak" />
      <Person name="bapparaj" profession="saka khan" />
      <Person />
      <Friend name="sujon" />
      <Student name="murad" profession="student" />
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

function Friend(props) {
  return (
    <div>
      <h6>{props.name}</h6>
      <h6>{props.profession}</h6>
    </div>
  );
}

function Student(props) {
  return (
    <div>
      <p>
        {props.name} and {props.profession}
      </p>
    </div>
  );
}

export default App;
