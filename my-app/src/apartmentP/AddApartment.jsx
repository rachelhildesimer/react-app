
import { useEffect, useState } from "react";
import { getAllCity } from "./api/apiCity";
import { addA, getAll } from "./api/apiApartment";
import { useSelector } from "react-redux";
import { getAllCategory } from "./api/apiCategory";
import { useNavigate } from "react-router";

import swal from "sweetalert";

export const AddApartment = () => {
    const navigate = useNavigate();

    const user = useSelector(state => state.currentUser);
    const [formData, setFormData] = useState({
        nameApart: '',
        description: '',
        pic: "dira",
        codeCategory: '',
        codeCity: '',
        addres: '',
        numBeds: 0,
        options: [],
        price: 0,
        codeOwner: user.user,
    });
    const [cities, setCities] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cityData = await getAllCity();
            setCities(cityData.data);
            const categoryData = await getAllCategory();
            setCategory(categoryData.data);
        };
        fetchData();
    }, []);

    const addApartment = async (e) => {
        const dira={...formData}        
        e.preventDefault();
        try {
            let res=await addA(dira);
            console.log(res.data);
            
            swal("הדירה נוספה בהצלחה!!","בטוחים שהדירה שלכם נדירה ושווה","success")
            navigate('/Apartment');

        } catch (error) {
            swal("הוספת הדירה נכשלה🥲🤔 !!"," נסו שוב ","error")

            console.error("Error:", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="add-apartment-container">
        <form onSubmit={addApartment}>
        <div className="form-group">
         <label>nameApart:</label>
            <input
                type="text"
                name="nameApart"
                placeholder="Input name"
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>description:</label>
            <input
                type="text"
                name="description"
                placeholder="Input description"
                onChange={handleChange}
                required
            />
            </div>
            <select name="codeCategory" value={formData.codeCategory} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                {category.map(categoryItem => (
                    <option key={categoryItem._id} value={categoryItem._id}>
                        {categoryItem.nameCategory}
                    </option>
                ))}
            </select>
            <select name="codeCity" value={formData.codeCity} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                {cities.map(city => (
                    <option key={city._id} value={city._id}>
                        {city.nameCity}
                    </option>
                ))}
            </select>
            <div className="form-group">
            <label>address:</label>
            <input
                type="text"
                name="address"
                placeholder="Input address"
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>numBeds:</label>
            <input
                type="number"
                name="numBeds"
                placeholder="Input number of beds"
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>options:</label>
            <input
                type="text"
                name="options"
                placeholder="Input options (space-separated)"
                onChange={(e) => setFormData(prev => ({ ...prev, options: e.target.value.split(" ") }))}
                required
            />
            </div>
            <div className="form-group">
            <label>price:</label>
            <input
                type="number"
                name="price"
                placeholder="Input price"
                onChange={handleChange}
                required
            />
            </div>
            <button type="submit">Add Apartment</button>
        </form>
        </div>
    );
};