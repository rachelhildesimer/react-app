import { useState } from "react";
import { create } from "./api/apiCategory";
import { useNavigate } from "react-router";
import swal from "sweetalert";

export const AddCategory = () => {

    const [nameCategory, setNameCategory] = useState('')

      const navigate = useNavigate();
  
    const add = async (e) => {
        e.preventDefault()
                    try {
                    await create(nameCategory);
                    swal(`${nameCategory}` ,"  נוסף בהצלחה😋","success")
                    navigate('/Category')
                    }
                    catch(error){
                        swal(`${nameCategory}` ,"  נכשל...🥲 ","error")
                        console.log("err")
                    }
    }

    

    return (
        <div className="add-category-container">
            <input type="text"
                placeholder="input name of category"
                onChange={(e) => setNameCategory(e.target.value)}
                onBlur={add}
                required
            >
            </input>         
               {/* <button onClick={add}>Add</button> */}
        </div>
    );
};