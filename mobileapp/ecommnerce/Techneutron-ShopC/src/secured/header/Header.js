import * as React from "react";
import { Button, Header, Text } from "@rneui/themed";
import ThemeSelector from "../../theme/themeSelector";
import SearchBar from "./SearchBar";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default () => {

  const navigation = useNavigation()

  const handleLogout = () =>{
    console.log("logout");
    navigation.navigate('Login')
  }

  return (
    <Header
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "TechNeutron-ShopC",
        style: { color: "#fff",fontWeight:'bold',fontSize:20 },
      }}
      centerContainerStyle={{}}
      containerStyle={{ width: 420, height: 160,paddingTop:20 }}
      leftComponent={()=>(<ThemeSelector/>)}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={() => (<ThemeSelector />) }
      rightContainerStyle={{}}
      statusBarProps={{}}
    >
        <View style={{width:400, marginTop:50}}>
            <SearchBar />
            <Button title='Logout' onPress={handleLogout}/>
        </View>
    </Header>
  );
}