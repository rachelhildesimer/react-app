// language-jsx
//  Copy code
import { useEffect, useState } from 'react';
import { CardCity } from './CardCity';
import { getAllCity } from './api/apiCity';
import { Outlet, useNavigate } from 'react-router';
// import './City.css'; // Importing the CSS file for styling


export const City = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [select, setSelect] = useState();

    useEffect(() => {
        getAllCity().then(x => setList(x.data));
    }, [list]);

    const show = (id) => {
        setSelect(id);
    };

    const addCity = () => {
        navigate('AddCity');
    };

    return (
        <div> 
          <Outlet/>
            <button onClick={addCity} class="fa-solid fa-plus-square"  id="but">   Add City</button>
            <div  className="city-container">
                {list.map(x => <CardCity city={x} show={show} key={x._id} />)}
            </div>
         
        </div>
    );
}