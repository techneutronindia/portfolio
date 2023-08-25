import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from '@rneui/themed';

const Card = () => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Item title="Talk to Doctor" uri="https://randomuser.me/api/portraits/men/36.jpg" />
          <Item title="Lab Test" uri="https://randomuser.me/api/portraits/men/37.jpg" />
          <Item title="Buy Medicine" uri="https://randomuser.me/api/portraits/men/38.jpg" />
        </View>
        <View style={styles.row}>
          <Item title="Covid - 19" uri="https://randomuser.me/api/portraits/men/39.jpg" />
          <Item title="MediBuddy" uri="https://randomuser.me/api/portraits/men/40.jpg" />
          <Item title="Insurance" uri="https://randomuser.me/api/portraits/men/41.jpg" />
        </View>
      </View>
    );
  };
  
  const Item = ({ title, uri }) => (
    <View style={styles.item}>
      <Avatar rounded source={{ uri }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingVertical: 20,
      borderRadius: 20,
      marginHorizontal: 16,
      elevation: 5,
      marginVertical: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 20,
    },
    item: {
      alignItems: 'center',
    },
    title: {
      color: 'black',
      marginTop: 10,
      fontWeight:'600',
    },
  });
  

export default Card;