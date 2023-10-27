import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import TabView from '../components/TabView';
import NavigationContext from '../context/NavigationContext';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContext.Provider value={navigation}>
        <TabView />
      </NavigationContext.Provider>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
