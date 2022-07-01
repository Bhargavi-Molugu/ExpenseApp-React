import { Link } from "react-router-dom";
import Transactions from "./Transactions";
import classes from "./css/Home.module.css";

function Home() {
  //  const [isExpenseFormOpened, setIsExpenseFormOpened] = useState(false);
  //  const [expenses, setExpenses] = useState('');

  //  const addNewTrasactionHandler = () => {
  //    setIsExpenseFormOpened(true);
  //  };

  //  const addExpenseHandler = (newExpense) => {
  //    const newExpenses = [...expenses, newExpense];
  //    console.log(newExpenses);
  //       setExpenses(newExpenses);
  //  };

  return (
    <>
      <div className={classes["dashboard-div"]}>
        <h2>DashBoard</h2>
        <div className={classes["expense-amount"]}>
          <p>Amount: £50</p>
        </div>

        <div className={classes.expenses}>
          <p>Recent Expenses</p>
          <Link to="/view-transactions">View All</Link>
        </div>
        <Transactions limit="5" />
        <Link to="/add-expense">
          <span
            className={`material-symbols-outlined ${classes["expense-add-icon"]}`}>
            Add
          </span>
        </Link>
      </div>
     
    </>
  );
}

export default Home;
