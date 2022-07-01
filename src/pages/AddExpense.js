import { useState } from "react";
import { Link } from "react-router-dom";
import { addExpense } from "../services";
import classes from "./css/AddExpense.module.css";

const AddExpense = () => {
  const [title, setTitle] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
 
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const optionChangeHandler = (event) => {
    setSelectedOption(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = async () => {
    const expenseObj = {
      name: title,
      selected: selectedOption,
      date: date,
      amount: amount,
    };
    if (title === '' || selectedOption === '' || date === '' || amount === '') {
      alert('Enter required fields to add expense');
      return;
    }
    await addExpense(expenseObj);
    alert("Your Expense has been added Successfully!");
    setTitle("");
    setSelectedOption("");
    setDate("");
    setAmount("");
  };
  return (
    <div>
      <section className={classes["left-arrow-icon-div"]}>
        <Link to="/home">
          <span className="material-symbols-outlined">keyboard_arrow_left</span>
        </Link>
        <h2>Expense Form</h2>
      </section>
      <section className={classes["add-expense-section"]}>
        <form className={classes.form}>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Expense Title*
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter your Expense Name"
              value={title}
              onChange={titleChangeHandler}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Expense Category*
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedOption}
              onChange={optionChangeHandler}>
              <option>--Selected Category--</option>
              <option value="Clothing">Clothing</option>
              <option value="Grocery">Grocery</option>
              <option value="Medical">Medical</option>
              <option value="Electronics">Electronics</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Expense Date*
            </label>
            <input
              type="date"
              className="form-control"
              id="formGroupExampleInput2"
              value={date}
              onChange={dateChangeHandler}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="formGroupExampleInput3" className="form-label">
              Expense Amount*
            </label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput3"
              placeholder="Enter Expense Amount"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>

          <div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={submitHandler}>
              Add
            </button>
            <button className="btn btn-danger ms-sm-1" type="reset">
              Reset
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddExpense;
