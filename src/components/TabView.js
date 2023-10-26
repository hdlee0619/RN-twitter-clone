import React, {useState} from 'react';

import {useWindowDimensions, StyleSheet} from 'react-native';
import {TabView as TabViewComponent, TabBar} from 'react-native-tab-view';

import FeedList from './FeedList';
import FollowList from './FollowList';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabContainer}
    activeColor="black"
    inactiveColor="#c8c8c8"
  />
);

const renderScene = ({route}) => {
  switch (route.key) {
    case 'feed':
      return <FeedList />;
    case 'follow':
      return <FollowList />;
  }
};

const TabView = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'feed', title: 'Feed'},
    {key: 'follow', title: 'Follow'},
  ]);

  return (
    <TabViewComponent
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default TabView;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#c8c8c8',
  },
  indicatorStyle: {
    width: 70,
    left: 100 - 70 / 2,
    backgroundColor: '#1DA1f2',
  },
});
