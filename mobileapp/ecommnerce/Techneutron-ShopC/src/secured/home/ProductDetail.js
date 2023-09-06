import React from 'react';
import { Card, Text, ThemeConsumer } from '@rneui/themed';
import { useRoute } from '@react-navigation/native';
import { Avatar } from '@rneui/base';
import { ScrollView, StyleSheet, View } from 'react-native';

const ProductDetail = () => {

    const route = useRoute();
    const product = route.params.product
    console.log('product : ', product);

    return (
        <ThemeConsumer>
            {({ theme }) => (
                <ScrollView style={{ marginTop: 30 }}>
                    <Card.Image source={product?.image} style={{ padding: 0, height: 350 }} />
                    <Card containerStyle={styles.card}>
                        <Text style={{ fontSize: 20, paddingBottom: 5, fontWeight: 'bold' }}>{product.name}</Text>
                        <Text>Heathered Joggers with Elasticated Drawstring Waist</Text>
                        <View>
                            <Text style={{ fontSize: 20, paddingTop: 20, fontWeight: 'bold' }}>{`$${parseFloat(product.price.replace('$', '')) * parseFloat(product.discount.replace('%', '')) / 100}`}</Text>
                            <Text style={{ marginLeft: 10 }}>MRP {product.price}</Text>
                        </View>
                    </Card>
                </ScrollView>
            )}
        </ThemeConsumer>

    );
}

const styles = StyleSheet.create({
    card: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        marginHorizontal: 8,
        marginTop: -20,
    }
});

export default ProductDetail;