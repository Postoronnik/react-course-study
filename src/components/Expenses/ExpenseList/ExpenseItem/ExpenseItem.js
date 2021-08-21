import React, {useState} from "react";

import './ExpenceItem.css';
import Date from "./Date/Date";
import Card from "../../../UI/Card/Card";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }

    return (
        <li>
            <Card className="expense-item">
                <Date date={props.date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;