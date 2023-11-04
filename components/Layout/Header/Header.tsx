import React from 'react';
import {Text, View} from 'react-native';
import {GlobalStyles} from '../../../constants/styles/Stylesheet';

type HeaderProps = {
  title?: string;
};

export default function Header({title}: HeaderProps = {title: 'GPT Chat'}) {
  return (
    <View
      style={[
        GlobalStyles.flex_1,
        GlobalStyles.center_all,
        GlobalStyles.border_b_1,
        GlobalStyles.shadow,
      ]}>
      <Text
        style={[
          GlobalStyles.text_bold,
          GlobalStyles.text_center,
          GlobalStyles.text_3xl,
        ]}>
        {title}
      </Text>
    </View>
  );
}
