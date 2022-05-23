import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
     const [products, setProducts] = useProducts([]);

    return (
        <div>
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto'>
                {
                    products.slice(0,3).map(product => <Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
            
        </div>
    );
};

export default Products;