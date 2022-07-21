//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

// const Header = (props) => {
//   return <h1>{props.course}</h1>;
// };

// const Part = (props) => {
//   return (
//     <p>
//       {props.part} {props.exercise}
//     </p>
//   );
// };

// const Content = (props) => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Part
//             part={props.parts[0].name}
//             exercise={props.parts[0].exercises}
//           />
//         </li>
//         <li>
//           <Part
//             part={props.parts[1].name}
//             exercise={props.parts[1].exercises}
//           />
//         </li>
//         <li>
//           <Part
//             part={props.parts[2].name}
//             exercise={props.parts[2].exercises}
//           />
//         </li>
//       </ul>
//     </div>
//   );
// };

// const Total = (props) => {
//   return (
//     <p>
//       num of exercises{" "}
//       {props.parts[0].exercises +
//         props.parts[1].exercises +
//         props.parts[2].exercises}
//     </p>
//   );
// };

// const Hello = ({name, age}) => {

//   const birthYear = () => {
//     const currentYear = new Date().getFullYear();
//     console.log(currentYear);
//     return currentYear - age;
//   };

//   return (
//     <div>
//       <p>
//         Hello {name} you are {age} years old.
//       </p>
//       <p>so that means you were probably born in {birthYear()}</p>
//     </div>
//   );
// };

// const App = (props) => {

//   const {counter} = props
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//       <Hello name="baran" age="27" />
//       <div>{counter}</div>
//     </div>
//   );
// };
const App = () => {
  const [counter, setCounter] = useState(0);

  console.log("rendering...", counter);
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default App;
