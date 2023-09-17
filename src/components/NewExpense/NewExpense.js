import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString()
    };
    props.onAddExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense = {saveExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
