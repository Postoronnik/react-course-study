import './ExpenseWindow.css';
import ExpenseFormClosed from "./Form/Closed/ExpenseFormClosed";
import {useState} from "react";
import ExpenseFormOpened from "./Form/Opened/ExpenseFormOpened";

function ExpenseWindow({addExpense}) {
    const [isClosed, setIsClosed] = useState(true);

    const onSubmitAddNewExpenseHandler = () => {
        setIsClosed(false);
    }

    const onResetHandler = () => {
        setIsClosed(true);
    }

    return (
        <div className='window'>
            {isClosed && <ExpenseFormClosed submit={onSubmitAddNewExpenseHandler}/>}
            {!isClosed && <ExpenseFormOpened addExpense={addExpense} reset={onResetHandler}/>}
        </div>
    );
}

export default ExpenseWindow;