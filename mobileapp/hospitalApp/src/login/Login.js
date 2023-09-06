import React, { useState } from 'react';
import { ThemeConsumer, Card, Text, Input, Button } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

const Login = ({navigation}) => {

const [user,setUser] = useState({
    email: '',
    password: '',
})
    const handleInputChange = (field, value)=>{
        setUser((prevData) => ({
            ...prevData,
            [field]: value,
          }));
    }

    const handleLogin = () => {
        console.log('Email:', user.email);
        console.log('Password:', user.password);
        if(user.email == "admin" && user.password == 1234){
            navigation.navigate('Home')
        }
      };


    return (
        <ThemeConsumer>
            {({ theme }) => (
                <View style={styles.container}>
                        <View style={styles.heading}>
                            <Text h3>Hey,</Text>
                            <Text h3>Login now.</Text>
                        </View>
                        <View>
                            <Input label='Email' onChangeText={(text) => handleInputChange('email', text)} />
                            <Input label='Password' textContentType='password' onChangeText={(text) => handleInputChange('password', text)}/>
                            <Button
                                title="LOG IN"
                                onPress={handleLogin}
                                buttonStyle={{
                                    borderWidth: 2,
                                    borderColor: 'white',
                                    borderRadius: 30,
                                }}
                                containerStyle={{
                                    width: 200,
                                    marginHorizontal: 70,
                                    marginVertical: 10,
                                }}
                                titleStyle={{ fontWeight: 'bold' }}
                            />
                        </View>
                </View>
            )}
        </ThemeConsumer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    heading:{
        paddingBottom:30
    }
})

export default Login;