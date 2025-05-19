import React from 'react';
// import './Home.css'; // Importing the CSS file for styling

export const Home = () => {
    return (

        <div className="home-container">
        <img className='img' width="100%" src={`${process.env.PUBLIC_URL}/images/p111.JPG`} alt="apartment"></img>

            <footer className="footer">
                <p>&copy; 2024 Invelup By Chany&Rachely.</p>
            </footer>
        </div>
    );
};
