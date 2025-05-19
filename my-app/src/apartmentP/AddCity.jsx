
import { useState } from "react"
import { create } from "./api/apiCity"
import { useNavigate } from "react-router";
import swal from "sweetalert";

export const AddCity = () => {
    const [error, setError] = useState("");

    const [nameCity, setNameCity] = useState('')

    const add = async (e) => {
                   e.preventDefault()

                    try {
                    await create(nameCity);
                     swal(`${nameCity}` ,"  נוסף בהצלחה😋","success")

                    navigate('/City')
                    }
                    catch(error){
                       if(error.status==401)
                        alert("אינך מחובר")
                       else
                       console.log("err"+error)
                    }
    }
    const navigate = useNavigate();

//     return <>
//      <div className="add-city-container"></div>
//         <input type="text"
//             placeholder="input name of city"
//             onChange={(e) => setNameCity(e.target.value)}
//             required
//         >
//         </input>
//         <button onClick={add}>להוספה</button>
//     </>
// }
return (
            <div className="add-city-container">
                <input type="text" placeholder="Input name city!!" onChange={(e) => setNameCity(e.target.value)} onBlur={add}required/>
                {/* <button  >Add City</button> */}
                {error && <p className="error-message">{error}</p>}
            </div>
        );
    }