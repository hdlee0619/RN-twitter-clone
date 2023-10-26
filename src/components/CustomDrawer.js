import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, StyleSheet, Text, View} from 'react-native';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImg}
          source={{
            uri: PROFILE.profileImgUrl,
          }}
        />
        <Text style={styles.user}>{PROFILE.user}</Text>
        <Text style={styles.userId}>@{PROFILE.userId}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  profileContainer: {
    marginHorizontal: 12,
    marginBottom: 24,
  },
  profileImg: {
    marginBottom: 8,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#c8c8c8',
  },
  user: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  userId: {
    marginTop: 4,
    fontSize: 15,
    color: '#555555',
  },
});

const PROFILE = {
  user: '몽자',
  userId: 'mongja',
  profileImgUrl:
    'https://i.namu.wiki/i/qCVlq5dYOT_0IRa0NwnYktixrJZMMlEzpe5RVTCEU6GSbzNSRZCZpOMoYp5QMTFy9P22ptEMyfG3Fog3mF8FBvtyum6JxExeReg2_X1J3KRcQ7b1EO67zrstqJ4dP1BIh1IvHKlrrak3I_3YeRFMlA.webp',
};
