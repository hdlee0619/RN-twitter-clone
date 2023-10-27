import React from 'react';

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Detail = props => {
  const {user, profileImgUrl, createdAt, userId, desc, contentImg} =
    props.route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userContainer}>
        <Image style={styles.profileImg} source={{uri: profileImgUrl}} />
        <View style={styles.userInfoContainer}>
          <Text style={styles.user}>{user}</Text>
          <Text style={styles.userId}>@{userId}</Text>
        </View>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.desc}>{desc}</Text>
        {contentImg && (
          <Image style={styles.contentImg} source={{uri: contentImg}} />
        )}
        <Text style={styles.createdAt}>{createdAt}</Text>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  profileImg: {
    width: 40,
    height: 40,
    marginRight: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#c8c8c8',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoContainer: {
    marginLeft: 4,
  },
  user: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  userId: {fontSize: 15, color: '#555555'},
  descContainer: {
    paddingVertical: 16,
  },
  desc: {
    fontSize: 15,
    color: 'black',
  },
  contentImg: {
    width: '100%',
    minHeight: 200,
    marginTop: 16,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  createdAt: {
    marginTop: 16,
    fontSize: 14,
    color: '#666666',
  },
});
