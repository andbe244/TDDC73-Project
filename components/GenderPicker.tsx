import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface GenderPickerProps {
  label: string;
  selectedGender: string;
  onGenderChange: (gender: string) => void;
}

const GenderPicker: React.FC<GenderPickerProps> = ({ label, selectedGender, onGenderChange }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, selectedGender === 'male' && styles.selectedButton]}
          onPress={() => onGenderChange('male')}
        >
          <Text style={styles.buttonText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedGender === 'female' && styles.selectedButton]}
          onPress={() => onGenderChange('female')}
        >
          <Text style={styles.buttonText}>Female</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedGender === 'other' && styles.selectedButton]}
          onPress={() => onGenderChange('other')}
        >
          <Text style={styles.buttonText}>Other</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    height: 30,  // Adjusted height based on your preference
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    marginTop: 5,
  },
  selectedButton: {
    borderColor: '#ff00ff',  // Color for the selected gender button
    borderWidth: 2,
  },
  buttonText: {
    color: '#333',
    fontSize: 12,  // Font size adjusted as per your styling
  },
});

export default GenderPicker;
