import React from 'react';
import { ScrollView } from 'react-native';
import ListItem from './ListItem';
import Gold from './Gold';

const Secured = ({ navigation }) => {

    return (
        <ScrollView>
            <ListItem />
            <Gold/>
        </ScrollView>
    );
}

export default Secured;