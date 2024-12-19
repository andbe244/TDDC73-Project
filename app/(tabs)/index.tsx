import { Image, StyleSheet, Platform, View, Text} from 'react-native';
import React, { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import InputField from '@/components/InputField';



export default function HomeScreen() {

  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  return (
    <View>
        <Text style={styles.white}> hello</Text>
        <InputField 
        label="Full Name"
        value={name}
        onChangeText={setName}
      />
      <InputField 
        label="Email"
        value={mail}
        onChangeText={setMail}
      />
      <InputField 
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  white: {
    color: "white",
  },
});
