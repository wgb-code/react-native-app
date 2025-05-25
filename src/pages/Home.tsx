import React, { useState } from 'react';

import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity
} from 'react-native';

import { 
  input,
  button,
  badge,
  text,
  view,
  placeholderColor,
  defaultOpacity
} from '../styles';

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

        <TouchableOpacity 
          style={button.default}
          activeOpacity={defaultOpacity}
          onPress={handleAddNewSkill}
        >
          <Text style={button.defaultText}>Add</Text>
        </TouchableOpacity>

        <Text style={[text.title, text.titleMargin]}>
          My Skills
        </Text>

        {mySkills.length > 0 && mySkills.map((skill, index) => (
          <TouchableOpacity key={index} style={badge.content}>          
            <Text style={text.badge}>
              {skill}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}