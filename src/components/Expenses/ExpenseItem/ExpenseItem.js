import './ExpenceItem.css';
import Date from "./Date/Date";

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <Date date = {props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;