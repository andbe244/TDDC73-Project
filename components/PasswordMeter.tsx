import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

interface PasswordMeterProps {
  password: string; // Password to evaluate
}

const PasswordMeter: React.FC<PasswordMeterProps> = ({ password }) => {
  const calculateStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25; // Length
    if (/[A-Z]/.test(password)) strength += 25; // Uppercase
    if (/\d/.test(password)) strength += 25; // Numbers
    if (/[@$!%*?&#]/.test(password)) strength += 25; // Special characters

    let feedback = 'Weak';
    if (strength >= 75) feedback = 'Strong';
    else if (strength >= 50) feedback = 'Medium';

    return { strength, feedback };
  };

  const { strength, feedback } = calculateStrength(password);

  return (
    <View style={styles.container}>
      <Text style={styles.feedback}>{feedback}</Text>
      <ProgressBar
        progress={strength / 100}
        color={strength >= 75 ? 'green' : strength >= 50 ? 'orange' : 'red'}
        style={styles.progressBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: 300,
  },
  feedback: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
  },
});

export default PasswordMeter;
