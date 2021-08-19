import './Expenses.css';
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import FilterWindow from "./FilterWindow/FilterWindow";

function Expenses(props) {
    return(
        <Card className="expenses">
            <FilterWindow/>
            {props.expenses.map( value => {
                return <ExpenseItem
                    title={value.title}
                    price={value.price}
                    date={value.date}
                />
             })}
        </Card>
    );
}

export default Expenses;