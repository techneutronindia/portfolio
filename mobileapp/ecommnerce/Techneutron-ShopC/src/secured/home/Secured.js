import React from 'react';
import { ScrollView } from 'react-native';
import ProductsList from './ProductsList';

const Secured = ({ navigation }) => {

    return (
        <ScrollView>
            <ProductsList />
        </ScrollView>
    );
}

export default Secured;