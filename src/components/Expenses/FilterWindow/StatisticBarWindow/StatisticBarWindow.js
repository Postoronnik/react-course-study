import './StatisticBarWindow.css';
import StatisticBar from "./StatisticBar/StatisticBar";

function StatisticBarWindow({expenses}) {
    const chartData =
        [
            {label: 'Jan', amount: 0},
            {label: 'Feb', amount: 0},
            {label: 'Mar', amount: 0},
            {label: 'Apr', amount: 0},
            {label: 'May', amount: 0},
            {label: 'Jun', amount: 0},
            {label: 'Jul', amount: 0},
            {label: 'Aug', amount: 0},
            {label: 'Sep', amount: 0},
            {label: 'Oct', amount: 0},
            {label: 'Nov', amount: 0},
            {label: 'Dec', amount: 0}
        ];

    expenses.forEach(expense => {
        let expenseMonth = expense.date.getMonth();
        chartData[expenseMonth].amount +=  parseInt(expense.amount);
    });

    let maxAmount = 0;

    if (expenses.length !== 0) {
        expenses.forEach(expense => {
            maxAmount += parseInt(expense.amount);
        });
    }

    return (
        <div className="window_style">
            {chartData.map((value) => {
                return <StatisticBar
                    key={value.label}
                    month={value.label}
                    amount={value.amount}
                    maxAmount={maxAmount}
                />
            })}
        </div>
    );
}

export default StatisticBarWindow;