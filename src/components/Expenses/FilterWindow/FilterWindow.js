import './FilterWindow.css';
import YearSelector from "./YearSelector/YearSelector";
import StatisticBarWindow from "./StatisticBarWindow/StatisticBarWindow";

function FilterWindow({getSelectedYear, expenses}) {

    return (
        <div className='filter-window'>
            <div className="filter-window_control">
                <div>Filter by year</div>
                <YearSelector  getSelectedYear = {getSelectedYear}/>
            </div>
            <StatisticBarWindow expenses = {expenses}/>
        </div>
    );
}

export default FilterWindow;