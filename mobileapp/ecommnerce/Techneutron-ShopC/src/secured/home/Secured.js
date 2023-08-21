import React from 'react';
import { ScrollView } from 'react-native';
import ProductList from './ProductList';

const Secured = ({ navigation }) => {

    return (
        <ScrollView>
            <ProductList />
        </ScrollView>
    );
}

export default Secured;