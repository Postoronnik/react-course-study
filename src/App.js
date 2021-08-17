import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Car insurance',
            price: 2000,
            date: new Date(2021, 2, 24)
        },
        {
            id: 'e2',
            title: 'Buy mobile',
            price: 700,
            date: new Date(2021, 4, 25)
        },
        {
            id: 'e3',
            title: 'Odds',
            price: 300,
            date: new Date(2021, 3, 10)
        },
    ];
    return (
        <div>
            <Expenses expenses = {expenses}/>
        </div>
    );
}

export default App;
