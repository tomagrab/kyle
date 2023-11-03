import React from 'react';
import {Text, View} from 'react-native';
import ChatInput from './components/UI/ChatInput/ChatInput';
import {GlobalStyles} from './constants/styles/Stylesheet';

export default function App() {
  return (
    <View style={GlobalStyles.flex1}>
      <View style={GlobalStyles.flex1}>
        <Text>Chat App</Text>
      </View>

      <View style={GlobalStyles.flex8}>
        <Text>Hello world!</Text>
      </View>

      <View style={GlobalStyles.flex1}>
        <ChatInput />
      </View>
    </View>
  );
}
