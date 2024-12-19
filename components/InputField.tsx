import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

interface InputFieldProps {
  label?: string; 
  value: string; 
  onChangeText: (text: string) => void; 
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.inputFieldContainer}>
      {/* Render Label if Provided */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* TextInput */}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter text"
        placeholderTextColor="#aaa" 
        underlineColorAndroid="transparent" 
        selectionColor="#000" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldContainer: {
    marginBottom: 15, 
    marginLeft: 25, 
    width: 200,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5, 
  },
  input: {
    height: 40, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc',
    marginLeft: 10,
    fontSize: 16, 
    color: '#000', 
    paddingVertical: 0, 
  },
});

export default InputField;
