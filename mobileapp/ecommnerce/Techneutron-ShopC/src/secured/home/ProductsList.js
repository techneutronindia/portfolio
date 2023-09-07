import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ThemeConsumer } from '@rneui/themed';
import { View } from 'react-native';
import data from '../../database/data';
import Product from './Product';

const ProductsList = () => {

    return (
        <ThemeConsumer>
            {({ theme }) => (
                <ScrollView >
                    <View style={styles.container}>
                    {
                        data.map((prod,i)=><Product key={'test'+ i} prod={prod} />)
                    }
                    </View>
                </ScrollView>
            )}
        </ThemeConsumer>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // This ensures that the content takes up the entire available space
      flexDirection: 'row', // Horizontal flex layout
      flexWrap: 'wrap', // Allow products to wrap to the next line when they don't fit
      justifyContent: 'space-between', // Distribute space between items
      paddingHorizontal: 16, // Add horizontal padding for spacing between items
    },
  });


export default ProductsList;