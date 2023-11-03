import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ChatInput from './components/UI/ChatInput/ChatInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>

      <ChatInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
