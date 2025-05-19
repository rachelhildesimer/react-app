import axios from 'axios'

const baseUrl = `http://localhost:3003/owner`

export const login = async (email, password) => {
   return axios.post( `${baseUrl}/login`,{email,password}) 
}

export const signIn =  ( phone, email, password,moreTelephone ) => {
    return axios.post( `${baseUrl}/register`,{ phone, email, password,moreTelephone }) 
 }

 export const myApartment = (id) => {
   return axios.get(`${baseUrl}/getApartmentsById/${id}`)   
}
export const getByCodeOwner = async (id) => {
   const token = localStorage.getItem("token") 
   try {
       const res = await axios.get(`${baseUrl}/getByCodeOwner/${id}`,
           {
               headers: {
                   Authorization: `Bearer ${token}`
               }
           }  
       )
       return (res.data)
   }
   catch (err) {
       return err.message
   }
}


