import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label: string; // Label for the input field
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  onFocus,
  onBlur,
  ...rest // Spread remaining props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus} // Forward onFocus to TextInput
        onBlur={onBlur}   // Forward onBlur to TextInput
        {...rest}         // Forward other props (e.g., secureTextEntry)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    padding: 5,
    borderBottomColor: '#ccc',
    fontSize: 16,
    color: '#000',
    backgroundColor: 'transparent', 
  },
});

export default InputField;
