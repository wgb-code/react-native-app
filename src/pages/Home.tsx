import React from 'react';

import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity
} from 'react-native';

import { 
  input,
  text,
  view,
  placeholderColor,
  button
} from '../styles';

export function Home() {
  return (
    <SafeAreaView style={view.container}>
      <View style={view.content}>
        <Text style={text.title}>Welcome, Willian!</Text>

        <TextInput 
          placeholder='New skill...'
          placeholderTextColor={placeholderColor}
          style={input.default}
        />

        <TouchableOpacity style={button.default}>
          <Text style={button.defaultText}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}