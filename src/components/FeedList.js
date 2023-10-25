import React from 'react';

import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const Item = ({title, profileImg}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={profileImg} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const FeedList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FeedList;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#c8c8c8',
  },
  title: {fontSize: 32},
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'hi',
    author: 'First Item',
    desc: 'desc',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'hi',
    author: 'Second Item',
    desc: 'desc',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'hi',
    author: 'Third Item',
    desc: 'desc',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'hi',
    author: 'Third Item',
    desc: 'desc',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'hi',
    author: 'Third Item',
    desc: 'desc',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: 'hi',
    author: 'Third Item',
    desc: 'desc',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'hi',
    author: 'Third Item',
    desc: 'desc',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d90',
    title: 'hi',
    author: 'Third Item',
    desc: 'desc',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29z89',
    title: 'hi',
    author: 'Third Item',
    desc: 'desc',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29min',
    title: 'hi',
    author: 'Third Item',
    desc: 'desc',
  },
];
