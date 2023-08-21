import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../secured/home/Secured'
import Cart from '../secured/cart/Cart'

const Drawer = createDrawerNavigator();

export default function Bag() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Cart" component={Cart} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}