import React from 'react';

import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';

const Item = ({
  author,
  profileImgUrl,
  authorId,
  createdAt,
  desc,
  contentImg,
}) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.profileImg} source={{uri: profileImgUrl}} />
      <View style={styles.contentContainer}>
        <View style={styles.authorContainer}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.authorId}>@{authorId}</Text>
          <Text style={styles.createdAt}>· {createdAt}</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        {contentImg && (
          <View style={styles.contentImgContainer}>
            <Image style={styles.contentImg} source={{uri: contentImg}} />
          </View>
        )}
      </View>
    </View>
  );
};

const FeedList = () => {
  return (
    <FlatList
      data={MOCK_DATA}
      renderItem={({item}) => (
        <Item
          author={item.author}
          profileImgUrl={item.profileImgUrl}
          authorId={item.authorId}
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
  authorContainer: {
    flexDirection: 'row',
    author: {fontSize: 17},
    alignItems: 'baseline',
  },
  author: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  authorId: {marginLeft: 4, fontSize: 15, color: '#555555'},
  createdAt: {marginLeft: 4, fontSize: 14, color: '#666666'},
  descContainer: {
    paddingVertical: 8,
  },
  desc: {
    fontSize: 15,
    color: 'black',
  },
  contentImgContainer: {
    maxHeight: 200,
  },
  contentImg: {
    height: '100%',
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

const MOCK_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    author: '몽자',
    authorId: 'mongja',
    profileImgUrl:
      'https://i.namu.wiki/i/qCVlq5dYOT_0IRa0NwnYktixrJZMMlEzpe5RVTCEU6GSbzNSRZCZpOMoYp5QMTFy9P22ptEMyfG3Fog3mF8FBvtyum6JxExeReg2_X1J3KRcQ7b1EO67zrstqJ4dP1BIh1IvHKlrrak3I_3YeRFMlA.webp',
    desc: '휴지벽에 도전하는 강아지',
    contentImg:
      'data:image/jpeg;base64,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',
    createdAt: '2일전',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    author: '몽자',
    authorId: 'mongja',
    profileImgUrl:
      'https://i.namu.wiki/i/qCVlq5dYOT_0IRa0NwnYktixrJZMMlEzpe5RVTCEU6GSbzNSRZCZpOMoYp5QMTFy9P22ptEMyfG3Fog3mF8FBvtyum6JxExeReg2_X1J3KRcQ7b1EO67zrstqJ4dP1BIh1IvHKlrrak3I_3YeRFMlA.webp',
    desc: '개빡친 강아지',
    contentImg: 'https://i.imgur.com/4LhZnzH.jpg',
    createdAt: '2일전',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    author: 'hi',
    authorId: 'mongja',
    profileImgUrl: 'profileImgUrl',
    desc: 'long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test long desc test ',
    createdAt: '2일전',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    author: 'hi',
    authorId: 'mongja',
    profileImgUrl: 'profileImgUrl',
    desc: 'desc',
    createdAt: '2일전',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    author: 'hi',
    authorId: 'mongja',
    profileImgUrl: 'profileImgUrl',
    desc: 'desc',
    createdAt: '2일전',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    author: 'hi',
    authorId: 'mongja',
    profileImgUrl: 'profileImgUrl',
    desc: 'desc',
    createdAt: '2일전',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    author: 'hi',
    authorId: 'mongja',
    profileImgUrl: 'profileImgUrl',
    desc: 'desc',
    createdAt: '2일전',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d90',
    author: 'hi',
    authorId: 'mongja',
    profileImgUrl: 'profileImgUrl',
    desc: 'desc',
    createdAt: '2일전',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29z89',
    author: 'hi',
    authorId: 'mongja',
    profileImgUrl: 'profileImgUrl',
    desc: 'desc',
    createdAt: '2일전',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29min',
    author: 'hi',
    authorId: 'mongja',
    profileImgUrl: 'profileImgUrl',
    desc: 'desc',
    createdAt: '2일전',
  },
];
