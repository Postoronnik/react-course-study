import './Expenses.css';
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import FilterWindow from "./FilterWindow/FilterWindow";


function Expenses({getSelectedYear,expenses}) {

    const getSelectedYearHandler = (selectedYear) => {
        getSelectedYear(selectedYear);
    };

    return(
        <Card className="expenses">
            <FilterWindow getSelectedYear = {getSelectedYearHandler}/>
            {expenses.map( value => {
                return <ExpenseItem
                    key={value.id}
                    title={value.title}
                    amount={value.amount}
                    date={value.date}
                />
             })}
        </Card>
    );
}

export default Expenses;