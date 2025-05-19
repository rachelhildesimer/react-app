import axios from 'axios'

const baseUrl = `http://localhost:3003/city` 

export const getAllCity = () => {
    return axios.get(`${baseUrl}`)
}

export const create =async (nameCity) => {
    const token = localStorage.getItem("token") 
    try {
        const res = await  axios.post(`${baseUrl}`,{nameCity} ,{headers: { Authorization: `Bearer ${token}`}} )
        console.log(res.data);

        return (res.data)
    }
    catch (err) {
        return err.message
    }
}

export const getApartmentByCodeCity=(codeCity)=>{
    return axios.get(`${baseUrl}/get/${codeCity}`)
}
