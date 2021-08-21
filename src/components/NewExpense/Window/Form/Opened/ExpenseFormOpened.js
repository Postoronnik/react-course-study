import '../FormStyle.css';
import {useState} from "react";

function ExpenseFormOpened({addExpense,reset}) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    };

    const numberChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();


        addExpense({
            title,
            amount,
            date: new Date(date)
        });

        setTitle('');
        setAmount('');
        setDate('');
    };

    const resetHandler = (event) => {
        event.preventDefault();
        reset(event);
    };

    return (
        <form onSubmit={submitHandler} onReset={resetHandler}>
            <div className="form_controls">
                <div className="form_control">
                    <label>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="form_control">
                    <label>Amount</label>
                    <input
                        type='number'
                        min="0.01"
                        step="0.5"
                        value={amount}
                        onChange={numberChangeHandler}
                    />
                </div>
                <div className="form_control">
                    <label>Date</label>
                    <input
                        type='date'
                        min="2019-01-01"
                        max="2022-12-31"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="form_open_buttons_direction">
                <div className="form_actions">
                    <button type="submit">Add expense</button>
                </div>
                <div className="form_actions">
                    <button type="reset">Cancel</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseFormOpened;