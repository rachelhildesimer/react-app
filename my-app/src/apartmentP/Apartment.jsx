import { useCallback, useEffect, useState } from 'react';
import { Card } from './Card';
import { getAll, getBeds, getNumBeds, getPrice } from './api/apiApartment';
import { Outlet, useNavigate } from 'react-router';
import { getAllCategory, getApartmentByCodeC } from './api/apiCategory';
import { HE } from '../translate/he';
import { getAllCity, getApartmentByCodeCity } from './api/apiCity';

export const Apartment = () => {
    const [allA, setAllA] = useState();
    const [idApart, setIdApart] = useState('');
    const navigate = useNavigate();
    const [listCategory, setListCategory] = useState([]);
    const [listCity, setListCity] = useState([]);
    const [price, setPrice] = useState(0);
    const [codeCategory, setCodeCategory] = useState(" ");
    const [codeCity, setCodeCity] = useState(" ");
    const [numBeds, setNumBeds] = useState(0);
    const [apartmentsList, setApartmentsList] = useState([]);

    useEffect(() => {
        getAll().then(x => setApartmentsList(x.data));
        getAllCategory().then(x => setListCategory(x.data));
        getAllCity().then(x => setListCity(x.data));
    }, []); 

    const addApart = () => {
        navigate('/AddApartment');

    };

    const all = () => {
        setAllA(true);
    };

    const filterApartmentsByCategory = useCallback(async (city) => {
        console.log(codeCategory);
        console.log(city);
        setCodeCategory(city);
        // console.log(codeCategory);
        // console.log(city);

        let response = await getApartmentByCodeC(city);
        // console.log(response.data.apartments);
        
        setApartmentsList(response.data.apartments);
        // console.log(apartmentsList);
        
    }, [codeCategory]);

    const filterApartmentsByCity = useCallback(async (city) => {
        
        setCodeCity(city);
        console.log(codeCity);
        
        let response = await getApartmentByCodeCity(city);
        setApartmentsList(response.data.apartments);
    }, [codeCity]);

    const filterApartmentsByNumBeds = useCallback(async (n) => {
        setNumBeds(n);
        let response = await getBeds(n);
        setApartmentsList(response.data);

    }, [numBeds]);  
 
    const filterApartmentsByPrice = useCallback(async (p) => {
        setPrice(p);
        let response = await getPrice(price);  
        setApartmentsList(response.data);
    });

    return (
        <div>
            <div id="div">
 
                <select id="city-select" value={codeCategory} onChange={(e) => filterApartmentsByCategory(e.target.value)} className='button'>
                    <option value="">{HE.chooseCategory}</option>
                    {listCategory.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.nameCategory}
                        </option>
                    ))}
                </select>         

               
                <select id="city-select" value={codeCity} onChange={(e) => filterApartmentsByCity(e.target.value)} className='button'>
                    <option value="">{HE.chooseCity}</option>
                    {listCity.map((city) => (
                        <option key={city._id} value={city._id}>
                            {city.nameCity}
                        </option>
                    ))}
                </select>
                <input placeholder='הכנס מספר מיטות' onChange={(e) => filterApartmentsByNumBeds(e.target.value)} className='button' />
                <input placeholder='הכנס מחיר' onChange={(e) => filterApartmentsByPrice(e.target.value)} className='button' />
                <br></br>
                <button onClick={addApart} className='button'>הוספת דירה</button>
            </div>
            <div className="apartment-container">
                {apartmentsList.length > 0 && apartmentsList.map(x => <Card apartment={x} key={x._id} />)}
            </div>
            <br />
            <Outlet />
        </div>
    );
}