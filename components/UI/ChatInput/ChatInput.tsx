import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

// type ChatInputProps = {};

export default function ChatInput() {
  return (
    <View style={ChatInputStyles.textInputContainer}>
      <TextInput style={ChatInputStyles.textInput} />
      <View style={ChatInputStyles.sendButton}>
        <Button title="Send" />
      </View>
    </View>
  );
}

const ChatInputStyles = StyleSheet.create({
  textInputContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    position: 'relative',
  },

  textInput: {
    width: '80%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 1,
  },

  sendButton: {
    borderColor: 'black',
    borderWidth: 1,
    position: 'absolute',
    right: 16,
  },
});
