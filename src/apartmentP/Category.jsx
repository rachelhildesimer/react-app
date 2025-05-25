import { useEffect, useState } from 'react';
import { CardCategory } from './CardCategory';
import { getAllCategory } from './api/apiCategory';
import { Outlet, useNavigate } from 'react-router';
// import './Category.css'; // Importing the CSS file for styling

export const Category = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [select, setSelect] = useState();

    useEffect(() => {
        getAllCategory().then(x => setList(x.data));
    }, [list]);

    const show = (id) => {
        setSelect(id);
    };

    const addCategory = () => {
        navigate('AddCategory');
    };

    return (
        <div >
            <button onClick={addCategory} class="fa-solid fa-plus-square" >   Add Category</button>
            <Outlet />
            <div className="category-container" >
                {list.map(x => <CardCategory category={x} show={show} key={x._id} />)}
            </div>
        </div>
    );
}