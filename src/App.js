import Expenses from "./components/Expenses/Expenses";
import ExpenseWindow from "./components/NewExpense/Window/ExpenseWindow";
import {useState} from "react";

const INITIAL_EXPENSES = [
    {
        id: 'e1',
        title: 'Car insurance',
        amount: 2000,
        date: new Date(2021, 2, 24)
    },
    {
        id: 'e2',
        title: 'Buy mobile',
        amount: 700,
        date: new Date(2021, 4, 25)
    },
    {
        id: 'e3',
        title: 'Odds',
        amount: 300,
        date: new Date(2019, 3, 10)
    },
];

function App() {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    const [year, setYear] = useState(2019);

    const addExpenseHandler = (newExpense) => {
        const expenseData = {
            id: Math.random().toString(),
            ...newExpense
        };
        setExpenses(prevExpenses => {
            return [{...expenseData, date: new Date(newExpense.date)}, ...prevExpenses];
        });
    }

    const getSelectedYearHandler = (year) => {
        setYear(parseInt(year));
    }

    const filterExpenses = (expenses,year) => {
        return expenses.filter(expense => expense.date.getFullYear() === year);
    }

    return (
        <div>
            <ExpenseWindow addExpense={addExpenseHandler}/>
            <Expenses getSelectedYear={getSelectedYearHandler} expenses={filterExpenses(expenses,year)}/>
        </div>
    );
}

export default App;
