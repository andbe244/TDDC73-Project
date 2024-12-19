import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps, TouchableOpacity, TextStyle, Image } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label: string; // Label for the input field
  secureTextEntry?: boolean;
  togglePasswordVisibility?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  secureTextEntry = false,
  onChangeText,
  onFocus,
  onBlur,
  togglePasswordVisibility = false,
  ...rest // Spread remaining props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={togglePasswordVisibility ? !isPasswordVisible : secureTextEntry}
          onFocus={onFocus} // Forward onFocus to TextInput
          onBlur={onBlur}   // Forward onBlur to TextInput
          {...rest}         // Forward other props (e.g., secureTextEntry)
        />
        {togglePasswordVisibility && (
            <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.toggleButton}
          >
            <Image
              source={
                isPasswordVisible
                  ? require('./hide.png') // Correct path to "hide" image
                  : require('./show.png') // Correct path to "show" image
              }
              style={styles.toggleImage}
            />
          </TouchableOpacity>
          
          
          
          )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  inputContainer: {
    flexDirection: "row", // Align input field and button horizontally
    alignItems: "center",
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    padding: 5,
    borderBottomColor: '#ccc',
    fontSize: 16,
    color: '#000',
    backgroundColor: 'transparent',
    marginBottom: 15,
    flex: 1, // Allow input to take remaining space
  },
  toggleButton: {
    marginLeft: 15,
     // Negative margin to move closer to the input
    alignItems: "center",
  },
  toggleImage: {

    width: 20, // Adjust width of the icon
    height: 20, // Adjust height of the icon
    resizeMode: "contain", // Prevent distortion
  },
});

export default InputField;
