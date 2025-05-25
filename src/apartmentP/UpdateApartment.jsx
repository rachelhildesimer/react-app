import { useEffect, useState } from "react";
import { update } from './api/apiApartment';
import { useNavigate, useParams } from "react-router";
import { getById } from './api/apiApartment';
import { up } from './api/apiApartment';
import { getAllCity } from './api/apiCity';
import { getAllCategory } from './api/apiCategory';

export const UpdateApartment = () => {
    const [nameApart, setNameApart] = useState('');
    const [description, setDescription] = useState('');
    const [pic, setPic] = useState('');
    const [codeCategory, setCodeCategory] = useState('');
    const [codeCity, setCodeCity] = useState('');
    const [addres, setAddres] = useState(0);
    const [numBeds, setNumBeds] = useState('');
    const [options, setOptions] = useState(['']);
    const [price, setPrice] = useState(0);
    const [codeOwner, setCodeOwner] = useState('');
    const [city, setCity] = useState('');
    const [listC, setListC] = useState([]);
    const [listCategory, setCategory] = useState([]);
    const { id } = useParams(0);
    const [error, setError] = useState('');
   const navigate=useNavigate('')
    useEffect(() => {
        getById(id).then(x => {
            setNameApart(x.data.nameApart);
            setDescription(x.data.description);
            setPic(x.data.pic);
            setCodeCategory(x.data.codeCategory);
            setCodeCity(x.data.codeCity);
            setAddres(x.data.addres);
            setNumBeds(x.data.numBeds);
            setOptions(x.data.options);
            setPrice(x.data.price);
            setCodeOwner(x.data.codeOwner);
            setCity(x.data.city);
        });
        getAllCity().then(x => setListC(x.data));
        getAllCategory().then(x => setCategory(x.data));
    }, []);

    const finish = async () => {
        // e.preventDefault();
        // console.log(e);
        
        const updateApart = {
            nameApart,
            description,
            pic,
            codeCategory,
            codeCity,
            addres,
            numBeds,
            options,
            price,
            codeOwner,
            city
        }
        console.log(updateApart);

        setError(' ');
        try {
            await up(id,updateApart);
            navigate('/Apartment')
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="update-apartment-container">
            <input type="text" placeholder="Enter Apartment Name" value={nameApart} onChange={(e) => setNameApart(e.target.value)} />
            <input type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Enter Picture URL" value={pic} onChange={(e) => setPic(e.target.value)} />
            <input type="text" placeholder="Enter Address" value={addres} onChange={(e) => setAddres(e.target.value)} />
            <input type="number" placeholder="Enter Number of Beds" value={numBeds} onChange={(e) => setNumBeds(e.target.value)} />
            <input type="text" placeholder="Enter Options" value={options} onChange={(e) => setOptions(e.target.value)} />
            <input type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <select name="codeCategory" value={codeCategory} onChange={(e) => setCodeCategory(e.target.value)}>
                <option value="">--Please choose an option--</option>
                {listCategory.map(categoryItem => ( 
                    <option key={categoryItem._id} value={categoryItem._id}>
                        {categoryItem.nameCategory}
                    </option>
                ))}
            </select>
            <select name="codeCity" value={codeCity} onChange={(e) => setCity(e.target.value)}>
                <option value="">--Please choose an option--</option>
                {listC.map(city => (
                    <option key={city._id} value={city._id}>
                        {city.nameCity}
                    </option>
                ))}
                </select>
            <button onClick={finish}>לעידכון</button>
        </div>
    );
};