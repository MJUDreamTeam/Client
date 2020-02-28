import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import SwitchButton from './SwitchButton';
import React, {useState} from 'react';

// 새 게시물 스크린에서의 스위치
const MediaSwitchButton = props => {
  const [switchValue1, setSwitchValue1] = useState(false);

  const toggleSwitch1 = value => {
    setSwitchValue1(value);
  };

  return (
    <View style={style.media}>
      <Text>{props.name}</Text>
      <SwitchButton toggleSwitch={toggleSwitch1} switchValue={switchValue1} />
    </View>
  );
};
const style = StyleSheet.create({
  media: {
    marginVertical: '0.5%',
    flexDirection: 'row',
  },
});

export default MediaSwitchButton;
