// import './style.css'; // Importing the CSS file for styling

export const CardCategory = ({ category, show }) => {
    return (
        <div className="card" onClick={() => show(category._id)}>
            <p>{category.nameCategory}</p>
        </div>
    );
}