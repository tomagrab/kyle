import React from 'react';
import {View} from 'react-native';
import ChatInput from './components/UI/ChatInput/ChatInput';
import {GlobalStyles} from './constants/styles/Stylesheet';
import Header from './components/Layout/Header/Header';
import ChatDisplay from './components/UI/ChatDisplay/ChatDisplay';

export default function App() {
  return (
    <View style={GlobalStyles.flex_1}>
      <Header title={'GPT Chat'} />

      <ChatDisplay />

      <View style={GlobalStyles.flex_1}>
        <ChatInput />
      </View>
    </View>
  );
}
