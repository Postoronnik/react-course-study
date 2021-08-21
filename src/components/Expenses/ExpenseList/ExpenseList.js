import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function ExpenseList({expenses}) {

    if (expenses.length === 0) {
        return (
            <h2 className="expenses-list__fallback">No expenses found.</h2>
        )
    }

    return (
        <ul className="expenses-list">
            {expenses.map(value =>
                <ExpenseItem
                    key={value.id}
                    title={value.title}
                    amount={value.amount}
                    date={value.date}
                />)}
        </ul>
    );
}

export default ExpenseList;