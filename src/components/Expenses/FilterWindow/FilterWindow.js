import './FilterWindow.css';
import YearSelector from "./YearSelector/YearSelector";
import StatisticBarWindow from "./StatisticBarWindow/StatisticBarWindow";

function FilterWindow() {

    const getChosenYearHandler = (chosenYear) => {
        console.log(chosenYear);
    }

    return (
        <div className='filter-window'>
            <div className="filter-window_control">
                <div>Filter by year</div>
                <YearSelector getChosenYear = {getChosenYearHandler}/>
            </div>
            <StatisticBarWindow/>
        </div>
    );
}

export default FilterWindow;