import React from 'react';
import { Image, ScrollView } from 'react-native';
import { Button, Card, Text, ThemeConsumer } from '@rneui/themed';

const Product = ({ prod }) => {

    return (
        <ThemeConsumer>
            {({ theme }) => (
                <ScrollView>
                    <Card>
                        <Card.Title>{prod?.name}</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={prod?.image}
                        />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>
                        <Text>{`Price : ${prod?.price}`}</Text>
                        <Text style={{ marginBottom: 10 }}>{`Discount : ${prod?.discount}`}</Text>
                        <Button
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}
                            title="BUY NOW"
                        />
                    </Card>
                </ScrollView>
            )}
        </ThemeConsumer>
    );
}

export default Product;