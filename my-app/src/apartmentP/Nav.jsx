// Nav.jsx
import { Link, NavLink } from 'react-router-dom';
// import './Nav.css'; // Importing CSS for styling
import { useSelector } from 'react-redux';
{/* <link rel="stylesheet" href="fontawesome/css/all.min.css"/> */}


export const Nav = () => {
    const user = useSelector(x => x.currentUser);

    return (

        <div className="nav"> <link rel="stylesheet" href="fontawesome/css/all.min.css" />

            <NavLink to="/Apartment" className="link" activeClassName="active">Apartment</NavLink>
            <NavLink to="/Login" className="link" activeClassName="active">Login</NavLink>
            <NavLink to="/Category" className="link" activeClassName="active">Category</NavLink>
            <NavLink to="/City" className="link" activeClassName="active">City</NavLink>
            {user.email&& <NavLink to="/MyApartments" className="link" activeClassName="active">My Apartments</NavLink>}
            <br></br>
           {user.email&&<h3 class="fa-regular fa-user"> {user.email}</h3>} 
        </div>
    );
};