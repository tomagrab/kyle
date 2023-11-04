import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {GlobalStyles} from '../../../constants/styles/Stylesheet';
import ChatMessage from '../ChatMessage/ChatMessage';
import {dummyMessages} from '../../../Data/messages/dummyMessages';
import {Message} from '../../../Types/Message';

type ChatDisplayProps = {};

export default function ChatDisplay({}: ChatDisplayProps) {
  const [messages, setMessages] = useState<Message[]>(dummyMessages);

  function addMessage(message: Message) {
    setMessages([...messages, message]);
  }

  return (
    <FlatList
      data={messages}
      renderItem={({item}) => <ChatMessage message={item} />}
      keyExtractor={item => item.message}
      style={GlobalStyles.flex_8}
    />
  );
}
