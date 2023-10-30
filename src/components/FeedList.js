import React, {useContext, useState} from 'react';
import NavigationContext from '../context/NavigationContext';

import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LIST_MOCK_DATA from '../util/LIST_MOCK_DATA';

const Item = ({
  user,
  navigation,
  profileImgUrl,
  userId,
  createdAt,
  desc,
  contentImg,
}) => {
  const [height, setHeight] = useState(0);
  const {width} = Dimensions.get('window');

  contentImg
    ? Image.getSize(contentImg, (w, h) => setHeight(h * (width / w)))
    : null;

  const detailProps = {
    user,
    profileImgUrl,
    userId,
    createdAt,
    desc,
    contentImg,
    height,
  };

  return (
    <Pressable onPress={() => navigation.navigate('Detail', detailProps)}>
      <View style={styles.itemContainer}>
        <Image style={styles.profileImg} source={{uri: profileImgUrl}} />
        <View style={styles.contentContainer}>
          <View style={styles.userContainer}>
            <Text style={styles.user}>{user}</Text>
            <Text style={styles.userId}>@{userId}</Text>
            <Text style={styles.createdAt}>· {createdAt}</Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.desc}>{desc}</Text>
          </View>
          {contentImg && (
            <View style={styles.contentImgContainer}>
              <Image
                style={styles.contentImg}
                source={{uri: contentImg, height}}
              />
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const FeedList = () => {
  const navigation = useContext(NavigationContext);
  return (
    <FlatList
      data={LIST_MOCK_DATA}
      renderItem={({item}) => (
        <Item
          navigation={navigation}
          user={item.user}
          profileImgUrl={item.profileImgUrl}
          userId={item.userId}
          createdAt={item.createdAt}
          desc={item.desc}
          contentImg={item.contentImg}
        />
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FeedList;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#c8c8c8',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 8,
  },
  userContainer: {
    flexDirection: 'row',
    user: {fontSize: 17},
    alignItems: 'baseline',
  },
  user: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  userId: {marginLeft: 4, fontSize: 15, color: '#555555'},
  createdAt: {marginLeft: 4, fontSize: 14, color: '#666666'},
  descContainer: {
    paddingVertical: 8,
  },
  desc: {
    fontSize: 15,
    color: 'black',
  },
  contentImgContainer: {},
  contentImg: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 16,
  },
  profileImg: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#c8c8c8',
    borderRadius: 20,
  },
});
