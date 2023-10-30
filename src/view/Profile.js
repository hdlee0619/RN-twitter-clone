import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import PROFILE_MOCK_DATA from '../util/PROFILE_MOCK_DATA';
import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.backgroundImg}
          source={{
            uri: PROFILE_MOCK_DATA.backgroundImgUrl,
          }}
        />
        <View style={styles.profileImgView}>
          <Image
            style={styles.profileImg}
            source={{uri: PROFILE_MOCK_DATA.profileImgUrl}}
          />
        </View>
      </View>
      <View style={styles.profileTextContainer}>
        <Text style={styles.user}>{PROFILE_MOCK_DATA.user}</Text>
        <Text style={styles.userId}>@{PROFILE_MOCK_DATA.userId}</Text>
        <View style={styles.joinedAtContainer}>
          <Icon name="calendar-outline" size={14} style={styles.calendarIcon} />
          <Text style={styles.joinedAt}>
            {dayjs(PROFILE_MOCK_DATA.joinedAt).format('YYYY년 MM월에 가입함')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: 'white'},
  backgroundImg: {
    position: 'relative',
    width: '100%',
    height: 100,
  },
  profileImgView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -29,
    left: 16,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: 'white',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#c8c8c8',
  },
  profileTextContainer: {
    marginTop: 44,
    paddingHorizontal: 16,
  },
  user: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  userId: {marginTop: 4, fontSize: 15, color: '#555555'},
  joinedAtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  calendarIcon: {marginTop: 4, marginBottom: 4, color: '#666666'},
  joinedAt: {marginLeft: 4, fontSize: 13, color: '#666666', lineHeight: 16},
  descContainer: {
    paddingVertical: 8,
  },
});
