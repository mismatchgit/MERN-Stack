import axios from 'axios';

const URL='http://localhost:8000/';

export const AddUserApi = async(data) => {
    try{
        return await axios.post(`${URL}/add`, data);
    } catch(error){
        console.log("Error While Calling API",error)
    }
}