//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
//import { click } from "@testing-library/user-event/dist/click";

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

/* Lesson 1C  with the counter buttons and destructured arrays */
// const Display = ({ counter }) => <div>{counter}</div> 
// const Button = ( {onClick , text}) => <button onClick={onClick}>{text}</button>


// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const increaseByOne = () => setCounter(counter+1)
//   const decreaseByOne = () => setCounter(counter-1)
//   const resetToZero = () => setCounter(0);


//   console.log("rendering...", counter);
//   return (
//     <div>
//       <Display counter={counter} />
//       <Button 
//         onClick={increaseByOne}
//         text="Increment" />
//       <Button 
//       onClick={resetToZero} 
//       text="Reset 0"/>
//       <Button 
//       onClick={decreaseByOne}
//       text="deincrement" />
//     </div>
//   );
// };


const History = (props) =>{
  if(props.allClicks.length === 0){
    return (
      <div>
        This App is used by pressing a button
      </div>
    )
  }
  return(
    <div>
      Button Press History: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => 
  <button onClick={handleClick}>
    {text}
  </button>


const App = () => {
  //maintain clicks
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left+1})
    setAll(allClicks.concat('L'))
  }

  const handleRightClick = () => {
    setClicks( { ...clicks, right: clicks.right+1})
    setAll(allClicks.concat('R'))
  }
    

  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'))
  //   setLeft(left+1)
  // }
  // const handleRightClick = () => {
  //   setAll(allClicks.concat("R"))
  //   setRight(right+1)
  // }

  return(
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="Right" />
      {clicks.right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
