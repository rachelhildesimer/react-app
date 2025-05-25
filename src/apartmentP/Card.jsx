import { Outlet, useNavigate } from 'react-router';
import { UpdateApartment } from './UpdateApartment';
import { useEffect, useState } from 'react';
import { delA } from './api/apiApartment';
import { useSelector } from 'react-redux';
import swal from "sweetalert";
export const Card = ({ apartment }) => {
    const n = useNavigate();
    let user = useSelector(x => x.currentUser);

    const [id, setID] = useState(0);

    useEffect(() => {
        setID(apartment._id);
    }, [apartment]);

    const updateApart = () => {
        console.log(apartment);
        // (apartment)
        alert(user.user)
        if(apartment.codeOwner==user.user)
        {
        n(`/UpdateApartment/${apartment._id}`);}
        else{
            swal('אופציה זו אינה מאושרת עבורך',"נראה שדירה זו איננה שייכת לך או שאתה משתמש לא מחובר🤔","error")
        }
    };

    const deleteApart = async (e) => {
        e.preventDefault();
        // alert(apartment.codeOwner._id)
        // alert(user.user)
        
            // {              
            // n(`/UpdateApartment/${apartment._id}`);
        try {
            if(apartment.codeOwner==user.user){
            await delA(id);}
            else{
                swal('אופציה זו אינה מאושרת עבורך',"נראה שדירה זו איננה שייכת לך או שאתה משתמש לא מחובר🤔","error")
            }
        } catch {
            alert("Apartment not deleted");
        }
    }

    
    const details=()=>{
     n(`/Details/${apartment._id}`);
    }

    return <>
        <div className="card">
            <img className='img' width="400" src={`${process.env.PUBLIC_URL}/images/${apartment.pic}.JPG`} alt="apartment" />
            <br></br>
            <p id="p">{apartment.nameApart}</p>
            <button onClick={updateApart}  class="fa-solid fa-edit">  עידכון</button>
            <br></br><br></br>
            <button onClick={deleteApart} class="fa-solid fa-trash">  מחיקה</button>
            <br></br><br></br>
            <button onClick={details} class="fa-solid fa-info-circle"> לפרטים</button>
        </div>
    </>;

}
