// import './style.css'; // Importing the CSS file for styling

export const CardCity = ({ city, show }) => {
    return (
        <div className="card"  onClick={() => show(city._id)} >
            <p>{city.nameCity}</p>
        </div>
    );
}