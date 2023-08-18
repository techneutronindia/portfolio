import React, { useEffect, useState } from 'react';
import data from '../../database/data'
import Product from './Product';
import { ScrollView } from 'react-native';

const ProductList = () => {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        setProducts(data)
    },[])

    return ( 
        <ScrollView>
            {Array.isArray(products) && products.map((prod,i)=>(<Product key={i*8} prod={prod} />))}
        </ScrollView>
     );
}
 
export default ProductList;