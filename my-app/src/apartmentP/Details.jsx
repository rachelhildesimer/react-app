
import { useEffect, useState } from "react"
// import { getById } from "../apartmentAPI/apiApartment";
import { useParams } from "react-router";
import { getById } from "./api/apiApartment";

export const Details = () => {

      const [apartment, setApartment] = useState({nameApart: '',
            description: '',
            pic: '',
            codeCategory: '',
            codeCity: '',
            addres: '',
            numBeds: 0,
            options: [''],
            price: 0,
            codeOwner: ''});
     

      const { id }=useParams()
     
      useEffect(() => {
        getById(id).then(x => {
                  setApartment(prev => ({
                      ...prev,
                      ...x.data
                  }));
            });

      }, [id])

     
      
      return <>
       <div className="card"> 
            <p>{apartment.description}</p>
            <p>{apartment.numBeds}</p>
            <p>{apartment.addres}</p>
            <p>{apartment.options.map(x => x +'\n'+" ")}</p>
            <p>{apartment.price}  </p>
            {apartment.codeCategory && <p id="p">{apartment.codeCategory.nameCategory}</p>}
            {apartment.codeCity && <p id="p">{apartment.codeCity.nameCity}</p>}
            {apartment.codeOwner && <p id="p">{apartment.codeOwner.phone}</p>}
       </div> 
       </>

}