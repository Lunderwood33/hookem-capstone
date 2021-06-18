import React from "react";
// import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
// import { NavBar } from "./nav/NavBar";
// import { Login } from "./auth/Login";
// import { Register } from "./auth/Register";
import "./Login.css";
// import logo from './logo.svg';
import './Hookem.css';

export const Hookem = () => (
  <>
      <ApplicationViews />
  </>
);
    // <Route
    //   render={() => {
    //     if (localStorage.getItem("hookem_user_id")) {
    //       return (
    //         <>
    //           <NavBar />
    //         </>
    //       );
    //     } else {
    //       return <Redirect to="/login" />;
    //     }
    //   }}
    // />

    // <Route path="/login">
    //   <Login />
    // </Route>
    // <Route path="/register">
    //   <Register />
    // </Route>


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
