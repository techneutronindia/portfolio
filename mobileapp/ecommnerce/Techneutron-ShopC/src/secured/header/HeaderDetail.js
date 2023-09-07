import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Icon, Avatar } from '@rneui/themed';

const HeaderDetail = () => {
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={
          <Icon
            name="menu"
            type="material"
            size={20}
            color="white"
            // Add onPress handler for the hamburger icon
          />
        }
        centerComponent={{ text: 'Techneutron-ShopC'}}
        rightComponent={
          <Avatar
            rounded
            source={{ uri: 'URL_TO_PROFILE_IMAGE' }}
            size="medium"
            // Add onPress handler for the profile circle
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0, // Remove the bottom border
  },
  headerContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0, // Remove the bottom border
  },
});

export default HeaderDetail;
