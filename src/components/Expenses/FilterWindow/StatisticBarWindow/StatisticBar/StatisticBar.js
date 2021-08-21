
import './StatisticBar.css';

function StatisticBar({month}){

    return (
        <div className="statistic_bar_content">
            <div className="statistic_bar"/>
            <div className="text_format">{month}</div>
        </div>
    );
}

export default StatisticBar;