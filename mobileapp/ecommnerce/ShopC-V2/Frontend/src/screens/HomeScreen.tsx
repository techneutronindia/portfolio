import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import {FlatList} from 'react-native';
import CoffeeCard from '../components/CoffeeCard';
import {Dimensions} from 'react-native';
import { assets } from '../../react-native.config';
import { useCallback, useMemo } from 'react';


const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
};

const HomeScreen = ({navigation}: any) => {
  const store = useStore();
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [data, setData] = useState({});

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // *****************
      const response = await fetch('http://192.168.1.48:80/php-api/customer/read.php');
      const textResponse = await response.text();
  
      const jsonObjects = textResponse.split('\n');
  
      const data = jsonObjects.map((json) => JSON.parse(json));
      
      const tmporaryProduct = [
        {
          id: 'C1',
          name: 'Americano',
          description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/americano/square/americano_pic_1_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/americano/portrait/americano_pic_1_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 0,
          tempIndex: 0,
        },
        {
          id: 'C2',
          name: 'Americano',
          description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/americano/square/americano_pic_2_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/americano/portrait/americano_pic_2_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 1,
          tempIndex: 1,
        },
        {
          id: 'C3',
          name: 'Americano',
          description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/americano/square/americano_pic_3_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/americano/portrait/americano_pic_3_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 2,
          tempIndex: 2,
        },
        {
          id: 'C4',
          name: 'Black Coffee',
          description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/black_coffee/square/black_coffee_pic_1_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/black_coffee/portrait/black_coffee_pic_1_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 3,
          tempIndex: 3,
        },
        {
          id: 'C5',
          name: 'Black Coffee',
          description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/black_coffee/square/black_coffee_pic_2_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/black_coffee/portrait/black_coffee_pic_2_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 4,
          tempIndex: 4,
        },
        {
          id: 'C6',
          name: 'Black Coffee',
          description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/black_coffee/square/black_coffee_pic_3_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/black_coffee/portrait/black_coffee_pic_3_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 5,
          tempIndex: 5,
        },
        {
          id: 'C7',
          name: 'Cappucchino',
          description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/cappuccino/square/cappuccino_pic_1_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/cappuccino/portrait/cappuccino_pic_1_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 6,
          tempIndex: 6,
        },
        {
          id: 'C8',
          name: 'Cappucchino',
          description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/cappuccino/square/cappuccino_pic_2_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/cappuccino/portrait/cappuccino_pic_2_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 7,
          tempIndex: 7,
        },
        {
          id: 'C9',
          name: 'Cappucchino',
          description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/cappuccino/square/cappuccino_pic_3_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/cappuccino/portrait/cappuccino_pic_3_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 8,
          tempIndex: 8,
        },
        {
          id: 'C10',
          name: 'Espresso',
          description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/espresso/square/espresso_pic_1_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/espresso/portrait/espresso_pic_1_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 9,
          tempIndex: 9,
        },
        {
          id: 'C11',
          name: 'Espresso',
          description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/espresso/square/espresso_pic_2_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/espresso/portrait/espresso_pic_2_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 10,
          tempIndex: 10,
        },
        {
          id: 'C12',
          name: 'Espresso',
          description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/espresso/square/espresso_pic_3_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/espresso/portrait/espresso_pic_3_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 11,
          tempIndex: 11,
        },
        {
          id: 'C13',
          name: 'Latte',
          description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/latte/square/latte_pic_1_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/latte/portrait/latte_pic_1_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 12,
          tempIndex: 12,
        },
        {
          id: 'C14',
          name: 'Latte',
          description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/latte/square/latte_pic_2_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/latte/portrait/latte_pic_2_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 13,
          tempIndex: 13,
        },
        {
          id: 'C15',
          name: 'Latte',
          description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/latte/square/latte_pic_3_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/latte/portrait/latte_pic_3_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 14,
          tempIndex: 14,
        },
        {
          id: 'C16',
          name: 'Macchiato',
          description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/macchiato/square/macchiato_pic_1_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/macchiato/portrait/macchiato_pic_1_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 15,
          tempIndex: 15,
        },
        {
          id: 'C17',
          name: 'Macchiato',
          description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/macchiato/square/macchiato_pic_2_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/macchiato/portrait/macchiato_pic_2_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 16,
          tempIndex: 16,
        },
        {
          id: 'C18',
          name: 'Macchiato',
          description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
          roasted: 'Medium Roasted',
          imagelink_square: require('../assets/coffee_assets/macchiato/square/macchiato_pic_3_square.png'),
          imagelink_portrait: require('../assets/coffee_assets/macchiato/portrait/macchiato_pic_3_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          prices: [
            {size: 'S', price: '1.38', currency: '$'},
            {size: 'M', price: '3.15', currency: '$'},
            {size: 'L', price: '4.29', currency: '$'},
          ],
          average_rating: 4.7,
          ratings_count: '6,879',
          favourite: false,
          type: 'Coffee',
          index: 17,
          tempIndex: 17,
        },
      ];

      const openCartsProductLists  = data[1].data
      // console.log("openCartProductList==========>>>>>>>>>", openCartsProductLists)
      const tempcofeeList: Array<any> = [];

    openCartsProductLists.forEach((x: { product_id: any; model: any; image: string, index: number }) => {
      // console.log("xxxxxxxx=======>>>",x)
      const updatedProducts = tmporaryProduct.map((product, id) => ({
        ...product,
        id: x.product_id,
        //index: product.index,
        name: x.model,
        imagelink_square: `http://192.168.1.48/php-api/image/${x.image}`,
        imagelink_portrait: `http://192.168.1.48/php-api/image/${x.image}`
      }));


      tempcofeeList.push(...updatedProducts);
    });

    console.log("tempCoffeeList===========>>>>>>", tempcofeeList)

    // Remove duplicates based on the 'id' property
    const uniqueCoffeeList = tempcofeeList.reduce((acc, current) => {
      const duplicateIndex = acc.findIndex((item: any) => item.id === current.id);
      if (duplicateIndex === -1) {
        acc.push(current);
      }
      
      return acc;
    }, []);

    const modifiedArray = uniqueCoffeeList.map((obj: any, index: number) => {
      obj.index = index;
      return obj
    })

    // function removeDuplicates(array) {
//       let uniqueObjects: any[] = [];
// let uniqueIds = new Set<number>();

// Iterate through the array
// tempcofeeList.forEach((obj: { id: number }) => {
//     // Check if the id of the object is already added
//     if (!uniqueIds.has(obj.id)) {
//         uniqueIds.add(obj.id);
//         uniqueObjects.push(obj);
//     }
// });

  
      //return uniqueObjects;
   //}

   
// Remove duplicates from arrayOfObjects
// let uniqueObjectsArray = removeDuplicates(arrayOfObjects);


      useStore.setState({CoffeeList: modifiedArray})
      const CoffeeList = useStore.getState() as Array<any>;
      const updatedCoffeeList = useStore.getState();
      console.log('uniqueCoffeeList========>>>>.', modifiedArray)
      setSortedCoffee(modifiedArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };

  const CoffeCardAddToCart = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    });
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      `${name} is Added to Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  // console.log("sorted coffee list:=======>", sortedCoffee)

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* App Header */}
        <HeaderBar />

        <Text style={styles.ScreenTitle}>
          Find the best{'\n'}coffee for you
        </Text>

        {/* Search Input */}

        <View style={styles.InputContainerComponent}>
          <TouchableOpacity
            onPress={() => {
              searchCoffee(searchText);
            }}>
            <CustomIcon
              style={styles.InputIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              searchCoffee(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchCoffee();
              }}>
              <CustomIcon
                style={styles.InputIcon}
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        {/* Category Scroller */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}>
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({index: index, category: categories[index]});
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], CoffeeList),
                  ]);
                }}>
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Coffee Flatlist */}

        <FlatList
          
          ref={ListRef}
          ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
              <Text style={styles.CategoryText}>No Coffee Available</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          data={sortedCoffee}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            // console.log("itesm========>>>>>>", item)
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={`${item.imagelink_square}`}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={CoffeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />

        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.6,
  },
});

export default HomeScreen;