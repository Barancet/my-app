import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
let counter = 1;

/*lesson 1 Default React Template for index.js*/
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App counter={counter} />
//   </React.StrictMode>
// );
/*Lesson 2 with non ideal way to handle rerendering of the page */
// const refresh = () => {
//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <App counter={counter} />
//   );
// };

// setInterval(() => {
//   refresh();
//   counter += 1;
// }, 1000);

/** Lesson 3 with proper state re rendering  */
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

reportWebVitals(console.log);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
