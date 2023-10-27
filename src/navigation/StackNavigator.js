import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../view/Home';
import Header from '../components/Header';
import Detail from '../view/Detail';
import FeedSetting from '../components/FeedSetting';

export default function StackNavigator() {
  const StackNavi = createNativeStackNavigator();

  return (
    <StackNavi.Navigator>
      <StackNavi.Screen
        name="Home"
        component={Home}
        options={{header: Header}}
      />
      <StackNavi.Screen
        name="Detail"
        component={Detail}
        options={{headerBackTitleVisible: false}}
      />
      <StackNavi.Screen
        name="Feed Setting"
        component={FeedSetting}
        options={{
          animation: 'slide_from_bottom',
          headerBackTitleVisible: false,
        }}
      />
    </StackNavi.Navigator>
  );
}
