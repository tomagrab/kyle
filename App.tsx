import React from 'react';
import {Text, View} from 'react-native';
import ChatInput from './components/UI/ChatInput/ChatInput';
import {GlobalStyles} from './constants/styles/Stylesheet';
import Header from './components/Layout/Header/Header';

export default function App() {
  return (
    <View style={GlobalStyles.flex_1}>
      <Header />

      <View style={GlobalStyles.flex_8}>
        <Text>Hello world!</Text>
      </View>

      <View style={GlobalStyles.flex_1}>
        <ChatInput />
      </View>
    </View>
  );
}
