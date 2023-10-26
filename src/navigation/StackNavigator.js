import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../view/Home';
import Detail from '../view/Detail';
import FeedSetting from '../components/FeedSetting';

const StackNavi = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <StackNavi.Navigator>
      <StackNavi.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
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
