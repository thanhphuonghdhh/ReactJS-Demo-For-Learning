import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    titleInput : '',
    amountInput: '',
    dateInput : ''
  });
  
  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title')
    setUserInput({
      ...userInput,
      titleInput : value
    }); else 
    if (identifier === 'amount')
    setUserInput({
      ...userInput,
      amountInput : value
    }); else 
    if (identifier === 'date')
    setUserInput({
      ...userInput,
      dateInput : value
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title: userInput.titleInput,
      amount: userInput.amountInput,
      date: new Date(userInput.dateInput)
    }
    props.onSaveExpense(expense);
    setUserInput({
      titleInput:'',
      amountInput:'',
      dateInput:''
    })
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text" 
          value={userInput.titleInput} 
          onChange={(event) => inputChangeHandler('title',event.target.value)} />
        </div>           
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
          type="number" 
          value={userInput.amountInput}  
          onChange={(event) => inputChangeHandler('amount',event.target.value)} 
          min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
          type="date" 
          min="2021-01-01" max="2022-01-01" 
          value={userInput.dateInput} 
          onChange={(event) => inputChangeHandler('date',event.target.value)} />
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </div>
      {/* <h2>
        {userInput.titleInput}</h2>
      <h1> {userInput.amountInput}</h1>
      <h1> {userInput.dateInput}</h1> */}
      
    </form>
  );
};

export default ExpenseForm;
