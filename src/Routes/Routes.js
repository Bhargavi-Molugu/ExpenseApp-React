import React from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Transactions from "../pages/Transactions";
import AddExpense from "../pages/AddExpense";
import Charts from "../pages/Charts";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/transactions">
        <Transactions />
      </Route>
      <Route path="/add-expense">
        <AddExpense />
      </Route>
      <Route path="/view-transactions">
        <Transactions />
      </Route>
      <Route path="/charts">
        <Charts />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
