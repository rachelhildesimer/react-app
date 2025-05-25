import axios from 'axios'

const baseUrl = `http://localhost:3003/category` 

export const getAllCategory = () => {
    return axios.get(`${baseUrl}`)
}

export const create = async(nameCategory) => {
    const token = localStorage.getItem("token") 
    try {
        const res = await   axios.post(`${baseUrl}`,{nameCategory} ,{headers: { Authorization: `Bearer ${token}`}} )
        console.log(res.data);

        return (res.data)
    }
    catch (err) {
        return err.message
    }
}
export const getApartmentByCodeC=(codeCategory)=>{
    
    return axios.get(`${baseUrl}/get/${codeCategory}`)
}
   
 

