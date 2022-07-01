import React from "react";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { getAllExpenses } from "../services/index";
import classes from './css/Charts.module.css';
import Button from "../Components/UI/Button/Button";

const Charts = () => {
  let colorsObject = {
    Clothing: "#FF0000",
    Grocery: "#FFA500",
    Medical: "#FFFF00",
    Electronics: "#f3ba2f",
    Others: "#2a71d0",
  };
  const [userData, setUserData] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [],
    // datasets: [
    //   {
    //     label: "Users Gained",
    //     data: [],
    //     backgroundColor: [
    //       "rgba(75,192,192,1)",
    //       "#ecf0f1",
    //       "#50AF95",
    //       "#f3ba2f",
    //       "#2a71d0",
    //     ],
    //     borderColor: "black",
    //     borderWidth: 2,
    //   },
    // ],
  });
  const [expenseData, setExpenseData] = useState({});
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [error, setError] = useState(null);

  function expenseYearHandler(event) {
    setSelectedYear(parseInt(event.target.value));
  }

  function filterHandler() {
    preparedExpenseChartData();
  }

  const preparedExpenseChartData = () => {
    let copyData = JSON.parse(JSON.stringify(userData));
    copyData.datasets = [];
    for (const key in expenseData) {
      let obj = expenseData[key];
      let expenseDate = new Date(obj.date);
      let index = findCategoryIndex(obj.selected, copyData);
      let expenseYear = expenseDate.getFullYear();
      if (selectedYear === expenseYear) {
        if (index == -1) {
          let expenseObj = {
            label: obj.selected,
            data: [],
            backgroundColor: [colorsObject[obj.selected]],
          };
          expenseObj.data[expenseDate.getMonth()] = obj.amount;
          copyData.datasets.push(expenseObj);
        } else {
          let amt = copyData.datasets[index].data[expenseDate.getMonth()];
          copyData.datasets[index].data[expenseDate.getMonth()] = parseInt(amt)+parseInt(obj.amount);
        }
      }
    }
    console.log(copyData);
    setUserData(copyData);
  };
  const findCategoryIndex = (category, copyData) => {
    let index = -1;
    let len = copyData.datasets.length;
    for (let i = 0; i < len; i++) {
      if (copyData.datasets[i].label.trim() === category.trim()) {
        index = i;
      }
    }
    return index;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await getAllExpenses();
        setExpenseData(data);
        console.log(data);
        // preparedExpenseChartData();
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={classes["charts-div"]}>
      <p>Chart View</p>
      <div className="mb-3">
        
        <label htmlFor="formGroupExampleInput" className="form-label">
          Select the Year
        </label>

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={expenseYearHandler}
          value={selectedYear}>
          <option>-- Selected Year</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>

        <Button
          className={classes.btn}
          type="button"
          onClick={filterHandler}>
          Filter
        </Button>

      </div>

      <Bar data={userData} />

    </div>
  );
};

export default Charts;
// https://jsfiddle.net/m20z6Lx7/2/
//https://jsfiddle.net/Lh6g9snu/1/
//https://jsfiddle.net/v4fekwL7/// I tried the same array items going to the same array
