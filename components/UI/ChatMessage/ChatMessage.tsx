import React from 'react';
import {Text, View} from 'react-native';
import {Message} from '../../../Types/Message';
import {GlobalStyles} from '../../../constants/styles/Stylesheet';

type ChatMessageProps = {
  message?: Message;
};

export default function ChatMessage({message}: ChatMessageProps) {
  return (
    <View style={[GlobalStyles.flex_8]}>
      <Text
        style={[
          GlobalStyles.p_2,
          GlobalStyles.text_2xl,
          GlobalStyles.border_4,
          GlobalStyles.text_2xl,
          GlobalStyles.border_r_4,
          message?.sender === 'assistant'
            ? [
                GlobalStyles.bg_green_500,
                GlobalStyles.border_green_500,
                GlobalStyles.text_left,
              ]
            : message?.sender === 'user'
            ? [
                GlobalStyles.bg_blue_500,
                GlobalStyles.border_blue_500,
                GlobalStyles.text_right,
              ]
            : [
                GlobalStyles.bg_red_500,
                GlobalStyles.border_red_500,
                GlobalStyles.text_center,
              ],
        ]}>
        {message?.message ?? 'First Message'}
      </Text>
    </View>
  );
}
