import './StatisticBarWindow.css';
import StatisticBar from "./StatisticBar/StatisticBar";

function StatisticBarWindow() {
    const months =
        [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];

    return (
        <div className="window_style">
            {months.map((value) => {return <StatisticBar month = {value}/> })}
        </div>
    );
}

export default StatisticBarWindow;