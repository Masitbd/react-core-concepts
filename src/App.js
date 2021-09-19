import logo from "./logo.svg";
import "./App.css";

function App() {
  const studentStyle = { borderRadius: "10px", border: "2px solid red" };
  const nayoks = ["rubel", "manna", "salalman shah"];

  const cinamas = [
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
  ];

  const students = [
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
  ];
  return (
    <div className="Student" style={studentStyle}>
      {/*   <ul>
        {nayoks.map((nayok) => (
          <li>{nayok}</li>
        ))}
      </ul> */}
      {/* {cinamas.map((cinama) => {
        return <Cinama name={cinama.naok} naok={cinama.naok} />;
      })} */}

      {students.map((student) => {
        return (
          <div style={studentStyle}>
            <Student
              name={student.name}
              university={student.university}
              country={student.country}
            />
          </div>
        );
      })}
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

function Cinama(props) {
  return (
    <div>
      <h2>name:{props.name}</h2>
      <h6>Nayika: {props.naok}</h6>
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

function Student(props) {
  return (
    <div className="student">
      <h2>name: {props.name}</h2>
      <h2>university: {props.university}</h2>
      <h2>country: {props.country}</h2>
    </div>
  );
}

export default App;
