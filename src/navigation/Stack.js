import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Start from '../components/Start';

export default function Stack() {
  const StackNavi = createNativeStackNavigator();

  return (
    <StackNavi.Navigator>
      <StackNavi.Screen name="Start" component={Start} />
    </StackNavi.Navigator>
  );
}
