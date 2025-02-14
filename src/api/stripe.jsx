import axios from "axios";

export const payment = async (token) => {
    console.log('token : ', token);
    return await axios.post('http://localhost:5000/api/payment/success',
        {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
}
