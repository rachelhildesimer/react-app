// MyApartments.jsx
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from './Card';
import { getByCodeOwner } from './api/apiOwner';
// import './MyApartments.css'; // Importing CSS for styling

export const MyApartments = () => {
    const [list, setList] = useState([]);
    let user = useSelector(x => x.currentUser);

    useEffect(() => {
        getByCodeOwner(user.user)
            .then(x => {
                setList(x.a);
            })
            .catch(() => {
                console.log("Error fetching apartments");
            });
    }, [user.user]);

    return (
        <div className="my-apartments-container">
            {list.length > 0 && list.map(x => <Card apartment={x} key={x.id} />)}
        </div>
    );
};