import './FilterWindow.css';
import YearSelector from "./YearSelector/YearSelector";
import StatisticBarWindow from "./StatisticBarWindow/StatisticBarWindow";

function FilterWindow({getSelectedYear}) {

    const getSelectedYearHandler = (selectedYear) => {
        getSelectedYear(selectedYear);
    }

    return (
        <div className='filter-window'>
            <div className="filter-window_control">
                <div>Filter by year</div>
                <YearSelector  getSelectedYear = {getSelectedYearHandler}/>
            </div>
            <StatisticBarWindow/>
        </div>
    );
}

export default FilterWindow;