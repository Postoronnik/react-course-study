import './ExpenseWindow.css';
import ExpenseForm from "./Form/ExpenseForm";

function ExpenseWindow(props) {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.addExpense(expenseData);
    };

    return (
        <div className='window'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    );
}

export default ExpenseWindow;