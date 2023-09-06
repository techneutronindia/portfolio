import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, Text, ThemeConsumer } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import ProductDetail from './ProductDetail';

const Product = ({ prod }) => {

  const navigation = useNavigation()

  const navigateToProductDetail = ()=>{
    navigation.navigate('ProductDetail',{ product: prod })
  }

  return (
    <ThemeConsumer>
      {({ theme }) => (
        <ScrollView>
          <TouchableOpacity onPress={navigateToProductDetail}>
            <Card containerStyle={styles.container}>
              <Card.Image
                style={{ padding: 0 }}
                source={prod?.image}
              />
              <Text style={{ marginBottom: 10, }}>
                The idea with React Native
              </Text>
              <Text>{`Price : ${prod?.price}`}</Text>
              <Text style={{ marginBottom: 10 }}>{`Discount : ${prod?.discount}`}</Text>
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="BUY NOW"
              />
            </Card>
          </TouchableOpacity>
        </ScrollView>
      )}
    </ ThemeConsumer>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#c39351',
    // paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 8,
    width: 170,
    height: 320,
    marginTop: 20,
  }
});


export default Product;