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

export const listUserCart = async (token) => {
    // code body
    return await axios.get("http://localhost:5000/api/user/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  export const saveAddress = async (token, address) => {
    // code body
    return await axios.post(
      "http://localhost:5000/api/user/address",
      { address },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };