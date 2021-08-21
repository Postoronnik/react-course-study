
function YearSelector({getSelectedYear}){
    const onNewYearSelectHandler = (event) => {
        getSelectedYear(event.target.value);
    };

    return (
        <select onChange={onNewYearSelectHandler}>
            <option value={2019}>2019</option>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
        </select>
    );
}

export default YearSelector;