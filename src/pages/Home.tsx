import React, { useState } from 'react';

import { SafeAreaView, View, Text, TextInput, FlatList } from 'react-native';
import { input, text, view, placeholderColor } from '../styles';
import { Badge, Button } from '../components';

export function Home() {
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<string[]>([]);

  function handleAddNewSkill() {
    if (!newSkill.trim()) return;
    
    setMySkills(oldState => [...oldState, newSkill.trim()]);
    setNewSkill('');
  }

  return (
    <SafeAreaView style={view.container}>
      <View style={view.content}>
        <Text style={text.title}>Welcome, Willian!</Text>

        <TextInput
          value={newSkill}
          placeholder='New skill...'
          placeholderTextColor={placeholderColor}
          style={input.default}
          onChangeText={setNewSkill}
        />

        <Button
          onPress={handleAddNewSkill} 
          title="Add"
        />

        <Text style={[text.title, text.titleMargin]}>
          My Skills
        </Text>

        <FlatList
          data={mySkills}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Badge value={item}/>
          )}
        />
      </View>
    </SafeAreaView>
  );
}