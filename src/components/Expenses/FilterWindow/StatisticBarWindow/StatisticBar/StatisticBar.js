
import './StatisticBar.css';

function StatisticBar(props){

    return (
        <div className="statistic_bar_content">
            <div className="statistic_bar"/>
            <div className="text_format">{props.month}</div>
        </div>
    );
}

export default StatisticBar;