import React from 'react';
import { useTheme } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../login/Login'
import Home from '../secured/home/Secured'
import ThemeSelector from '../theme/themeSelector';
import Header from '../secured/header/Header';

const Navigation = () => {
  const { theme } = useTheme();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.white,
          text: theme.colors.black,
        },
        dark: theme.mode === 'dark',
      }}
    >
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{title: 'Login' ,headerRight: () => (<ThemeSelector />)}} component={Login} />
        <Stack.Screen name="Home" options={{ title: 'Home',header:()=>(<Header />)}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation