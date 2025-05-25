import axios from 'axios'

const baseUrl = `http://localhost:3003/apartment`

export const getAll = () => {
    return axios.get(`${baseUrl}`)
}

export const getById = (id) => {
    return axios.get(`${baseUrl}/${id}`)
}
export const getPrice = (price) => {
    return axios.get(`${baseUrl}/getPrice/${price}`)
}

export const getBeds = (numBeds) => { 
    // console.log(numBeds);
    return axios.get(`${baseUrl}/getNumBeds/${numBeds}`)
}
 
export const up =async (id, updateApart) => {
    // console.log(updateApart);
    
    const token = localStorage.getItem("token") 
    try {
        const res = await  axios.patch(`${baseUrl}/${id}`, updateApart,{headers: { Authorization: `Bearer ${token}`}} )
        // console.log(res.data);

        return (res.data)
    }
    catch (err) {
        return err.message
    }
}



export const addA = async(dira) => {
    const token = localStorage.getItem("token") 
    try {        
        const res = await axios.post(`${baseUrl}`,dira,{headers: { Authorization: `Bearer ${token}`}} )
        return (res.data)
    }
    catch (err) {
        return err.message
    }
}
export const delA = async(id) => {
    const token = localStorage.getItem("token") 
    try {
        const res = await  axios.delete(`${baseUrl}/${id}`,{headers: { Authorization: `Bearer ${token}`}} )
        console.log(res.data);

        return (res.data)
    }
    catch (err) {
        return err.message
    }
}



