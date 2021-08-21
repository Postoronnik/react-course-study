import './ExpenseWindow.css';
import ExpenseFormClosed from "./Form/Closed/ExpenseFormClosed";
import {useState} from "react";
import ExpenseFormOpened from "./Form/Opened/ExpenseFormOpened";

function ExpenseWindow({addExpense}) {
    const [isClosed, setIsClosed] = useState(Boolean("false"));

    const actionHandler = (event) => {
        if (event.type === "submit") {
            setIsClosed(false);
            return;
        }

        if(event.type === "reset"){
            setIsClosed(true);
            return;
        }
    };

    if (isClosed) {
        return (
            <div className='window'>
                <ExpenseFormClosed submit={actionHandler}/>
            </div>
        );
    }

    return (
        <div className='window'>
            <ExpenseFormOpened addExpense={addExpense} reset = {actionHandler}/>
        </div>
    );
}

export default ExpenseWindow;