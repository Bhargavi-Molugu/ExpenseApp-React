import React from "react";
import Routes from "./Routes/Routes";
import { Link } from "react-router-dom";
import classes from "./App.module.css";

const App = () => {
  return (
    <>
      <header className="bg-primary py-2 text-center">
        <h1>Expense Tracker</h1>
      </header>
      
      <Routes />

      <footer className={`bg-primary py-2 text-center ${classes["icons-div"]}`}>
        <Link to="/home">
          <span className="material-symbols-outlined">Home</span>
        </Link>
        <Link to="/charts">
          <span className="material-symbols-outlined">bar_chart</span>
          </Link>
        <Link to="/transactions">
          <span className="material-symbols-outlined">receipt</span>
        </Link>
      </footer>
      
    </>
  );
};

export default App;
