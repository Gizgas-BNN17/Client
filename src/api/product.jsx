import axios from "axios";


export const createProduct = async (token, form) => {
    return await axios.post('http://localhost:5000/api/product',
        form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
}

export const listProduct = async (count = 20) => {
    return await axios.get('http://localhost:5000/api/products/' + count
        , {
        
        }
    )
}
export const readProduct = async (token, id) => {
    // code body
    return axios.get("http://localhost:5000/api/product/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
export const updateProduct = async (token, id, form) => {
    return await axios.put('http://localhost:5000/api/product/' + id
        , form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
}

export const removeProduct = async (token, id) => {
    return await axios.delete('http://localhost:5000/api/product/' + id
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}

export const uploadFiles = async (token, data) => {
    console.log('api update', data)
    return await axios.post('http://localhost:5000/api/images',
        { images: data }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
}

export const removeFiles = async (token, public_id) => {
    console.log('api frontent', public_id)
    return await axios.post('http://localhost:5000/api/removeimages',
        { public_id }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
}

export const searchFilters = async (arg) => {
    // code body
    return axios.post("http://localhost:5000/api/search/filters", arg);
  };
  

  export const listProductBy = async (sort, order, limit) => {
    // code body
    return axios.post("http://localhost:5000/api/productby", {
      sort,
      order,
      limit,
    });
  };