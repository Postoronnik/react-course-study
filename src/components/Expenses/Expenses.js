import './Expenses.css';
import Card from "../UI/Card/Card";
import FilterWindow from "./FilterWindow/FilterWindow";
import ExpenseList from "./ExpenseList/ExpenseList";


function Expenses({getSelectedYear, expenses}) {

    return (
        <Card className="expenses">
            <FilterWindow getSelectedYear={getSelectedYear} expenses = {expenses}/>
            <ExpenseList expenses={expenses}/>
        </Card>
    );
}

export default Expenses;