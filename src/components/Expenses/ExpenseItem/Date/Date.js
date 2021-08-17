import "./Date.css";

function Date(props) {
    const month = props.date.toLocaleString('en-Us', {month: 'long'});
    const day = props.date.toLocaleString('en-Us', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="date">
            <div className="date_month">{month}</div>
            <div className="date_year">{year}</div>
            <div className="date_year">{day}</div>
        </div>
    );
};

export default Date;