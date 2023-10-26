import React, {useRef} from 'react';

import {Image, Platform, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useScrollToTop} from '@react-navigation/native';

const Header = ({navigation}) => {
  const ref = useRef(null);

  useScrollToTop(
    useRef({scrollToTop: () => ref.current?.scrollToTop({y: 100})}),
  );

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Image style={styles.userIcon} source={{uri: PROFILE_URI}} />
      </Pressable>
      <Icon name="twitter" size={30} color="#1DA1f2" />
      <Pressable onPress={() => navigation.navigate('Feed Setting')}>
        <Icon name="setting" size={30} color="#777777" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 8,
    ...Platform.select({
      android: {
        marginTop: 16,
      },
    }),
  },
  userIcon: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#c8c8c8',
  },
});

const PROFILE_URI =
  'https://i.namu.wiki/i/qCVlq5dYOT_0IRa0NwnYktixrJZMMlEzpe5RVTCEU6GSbzNSRZCZpOMoYp5QMTFy9P22ptEMyfG3Fog3mF8FBvtyum6JxExeReg2_X1J3KRcQ7b1EO67zrstqJ4dP1BIh1IvHKlrrak3I_3YeRFMlA.webp';
