import React, {useState} from 'react';

import {StyleSheet, Switch, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const FeedSetting = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingContainer}>
        <Icon name="switcher" size={16} />
        <Text style={styles.settingText}>Switch component test</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
    </View>
  );
};

export default FeedSetting;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', height: '100%'},
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#c8c8c8',
  },
  settingText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
});
