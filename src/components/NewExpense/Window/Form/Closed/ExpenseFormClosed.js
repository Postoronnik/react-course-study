import '../FormStyle.css';

function ExpenseFormClosed({submit}) {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        submit(event);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form_actions_closed">
                <button>Add new expense</button>
            </div>
        </form>
    );
}

export default ExpenseFormClosed;