import React, { useEffect } from "react";
import { useState } from "react";
import { getAllExpenses } from "../services/index";
import classes from "./css/Transactions.module.css";

const Transactions = ({ limit = -1 }) => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const iconMapping = {
    grocery: "shopping_cart_checkout",
    clothing: "styler",
    medical: "medication",
    electronics: "cable",
    others: "dynamic_feed",
  };
  useEffect(() => {
    async function fetchData() {
      try {
        let data = await getAllExpenses();
        let loadedExpenses = [];
        for (const key in data) {
          loadedExpenses.push({
            expenseTitle: data[key].name,
            expenseType: data[key].selected,
            expenseDate: data[key].date,
            expenseAmount: data[key].amount,
          });
        }
        if (limit !== -1) {
          let exp = loadedExpenses.slice(0, limit);
          setExpenses(exp);
        } else {
          setExpenses(loadedExpenses);
        }
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [limit]);
  return (
    <>
      {error && <p>{error} </p>}
      {!error && (
        <ul className={classes["transaction-list-group"]}>
          {expenses.map((expense, index) => {
            let expenseType = expense.expenseType
              ? expense.expenseType.toLowerCase()
              : "others";
            return (
              <li
                key={index}
                className={classes["transaction-list-group-item"]}>
                <div className={classes["icon-div"]}>
                  <span
                    className={`material-symbols-outlined ${classes["expense-icon"]}`}>
                    {iconMapping[expenseType]}
                  </span>
                </div>
                <div className={classes["name-date-div"]}>
                  <p className={classes["expense-title"]}>
                    {expense.expenseTitle}
                  </p>
                  <p className={classes["expense-date"]}>
                    {expense.expenseDate}
                  </p>
                </div>
                <div className={classes["expense-amount"]}>
                  <span> £{expense.expenseAmount}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Transactions;
