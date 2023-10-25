import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import Header from '../components/Header';
import FeedList from '../components/FeedList';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <FeedList />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1},
});
