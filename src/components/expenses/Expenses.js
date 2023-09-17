import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
   const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
      console.log(selectedYear);
   };
    return(
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onFilterChange = {filterChangeHandler}/>
      <ExpenseItem
        date = {props.expenses[0].date}
        title = {props.expenses[0].title}
        amount = {props.expenses[0].amount}/>
      <ExpenseItem
        date = {props.expenses[1].date}
        title = {props.expenses[1].title}
        amount = {props.expenses[1].amount}/>
              <ExpenseItem
        date = {props.expenses[2].date}
        title = {props.expenses[2].title}
        amount = {props.expenses[2].amount}/>
              <ExpenseItem
        date = {props.expenses[3].date}
        title = {props.expenses[3].title}
        amount = {props.expenses[3].amount}/>
        </Card>
    );
}
export default Expenses;