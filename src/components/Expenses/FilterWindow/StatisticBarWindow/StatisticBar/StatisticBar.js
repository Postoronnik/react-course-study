
import './StatisticBar.css';

function StatisticBar({month, amount, maxAmount}){
    let barFillHeight = '0%';

    console.log(amount);

    if (maxAmount > 0) {
        barFillHeight = Math.round((amount / maxAmount) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill'
                     style={{height : barFillHeight}}
                />
            </div>
            <div className='chart-bar__label'> {month} </div>
        </div>
    );
}

export default StatisticBar;