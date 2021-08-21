import './Expenses.css';
import Card from "../UI/Card/Card";
import FilterWindow from "./FilterWindow/FilterWindow";
import ExpenseList from "./ExpenseList/ExpenseList";


function Expenses({getSelectedYear, expenses}) {

    const getSelectedYearHandler = (selectedYear) => {
        getSelectedYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <FilterWindow getSelectedYear={getSelectedYearHandler}/>
            <ExpenseList expenses={expenses}/>
        </Card>
    );
}

export default Expenses;