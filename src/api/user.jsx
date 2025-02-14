import axios from "axios";

export const createUserCart = async (token, card) => {
    console.log('createUserCart : ', token, card);
    return await axios.post('http://localhost:5000/api/user/card',
        card, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
}