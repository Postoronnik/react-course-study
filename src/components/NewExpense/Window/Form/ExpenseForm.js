import './ExpenseForm.css';
import {useState} from "react";

function ExpenseForm(props) {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        });
    };

    const numberChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        props.onSaveExpenseData(userInput);

        setUserInput(() => {
            return {
                enteredTitle : '',
                enteredAmount : '',
                enteredDate : ''
            };
        });
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="form_controls">
                <div className="form_control">
                    <label>Title</label>
                    <input
                        type='text'
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="form_control">
                    <label>Amount</label>
                    <input
                        type='number'
                        min="0.01"
                        step="0.5"
                        value={userInput.enteredAmount}
                        onChange={numberChangeHandler}
                    />
                </div>
                <div className="form_control">
                    <label>Date</label>
                    <input
                        type='date'
                        min="2019-01-01"
                        max="2022-12-31"
                        value={userInput.enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="form_actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;