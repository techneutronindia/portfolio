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



// import * as React from "react";
// import { Header, Text } from "@rneui/themed";
// import ThemeSelector from "../../theme/themeSelector";
// import { View, TouchableOpacity, StyleSheet, Animated, TouchableWithoutFeedback } from "react-native"; // Import Animated
// import { useNavigation } from "@react-navigation/native";
// import Card from "../home/Card";
// import Svg, { Path } from 'react-native-svg';

// const Sidebar = ({ isOpen }) => {

//   return (
//     <View style={styles.sidebar}>
//       <Text style={styles.menuTitle}>TechNeutron</Text>
//       <View style={[styles.sidebar, { transform: [{ translateX: isOpen ? 0 : -300 }] }]}>
//         <TouchableOpacity style={styles.menuItem}>
//           <Text style={styles.menuText}>Menu Item 1</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.menuItem}>
//           <Text style={styles.menuText}>Menu Item 2</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default () => {
//   const navigation = useNavigation();
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const sidebarAnimation = React.useRef(new Animated.Value(0)).current;

//   const handleLogout = () => {
//     console.log("logout");
//     navigation.navigate('Login');
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);

//     Animated.timing(sidebarAnimation, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: false,
//     }).start()
//   }

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);

//     Animated.timing(sidebarAnimation, {
//       toValue: isMenuOpen ? 0 : 1,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   return (
//     <TouchableWithoutFeedback onPress={closeMenu}>
//       <View style={{ flex: 1 }} >
//         <View style={{ position: 'relative' }}>
//           <View style={styles.container}>
//             <TouchableOpacity onPress={toggleMenu}>
//               <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={25} height={25}>
//                 <Path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" fill={'white'} stroke={'white'} />
//               </Svg>
//             </TouchableOpacity>
//           </View>

//           <Header backgroundImageStyle={{}}
//             barStyle="default"
//             centerContainerStyle={{}}
//             containerStyle={{ width: 420, height: 180, paddingTop: 20, borderBottomLeftRadius: 18, borderBottomRightRadius: 18 }}
//             leftContainerStyle={{}}
//             linearGradientProps={{}}
//             placement="center"
//             rightComponent={{}}
//             rightContainerStyle={{}}
//             statusBarProps={{}}>
//           </Header>
//           {/* <View style={{ position: 'absolute', top: 140, width: '100%' }}><Card /></View> */}
//           <Animated.View style={[styles.sidebarContainer, {
//             transform: [{
//               translateX: sidebarAnimation.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [-300, 0],
//               })
//             }]
//           }]}>
//             <Sidebar isOpen={isMenuOpen} />
//           </Animated.View>
//         </View>
//       </View>
//     </TouchableWithoutFeedback >
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     zIndex: 10,
//     top: 50,
//     left: 20,
//   },
//   sidebarContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: 300,
//     height: 1000,
//     backgroundColor: 'white',
//     zIndex: 1000,
//   },
//   sidebar: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   menuTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     letterSpacing: 2,
//   },
//   menuItem: {
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//   },
//   menuText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

