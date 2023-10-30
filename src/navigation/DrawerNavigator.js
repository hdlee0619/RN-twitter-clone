import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import Profile from '../view/Profile';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home Drawer"
        component={StackNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
