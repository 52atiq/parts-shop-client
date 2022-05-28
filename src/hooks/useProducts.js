
import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        fetch('https://boiling-meadow-00711.herokuapp.com/purchase')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products, setProducts]
};

export default useProducts;