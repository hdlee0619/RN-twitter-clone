import React from 'react';

import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Icon name="user" size={30} color="#1DA1f2" style={styles.userIcon} />
      </Pressable>
      <Icon name="twitter" size={30} color="#1DA1f2" />
      <Pressable onPress={() => navigation.navigate('Feed Setting')}>
        <Icon name="setting" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    paddingLeft: 8,
    paddingRight: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#c8c8c8',
  },
  userIcon: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#1DA1f2',
  },
});
