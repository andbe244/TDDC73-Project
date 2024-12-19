import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

interface PasswordMeterProps {
  password: string; // Password to evaluate
}

const PasswordMeter: React.FC<PasswordMeterProps> = ({ password }) => {
  const calculateStrength = (password: string) => {
    let strength = 0;
    const tips: string[] = [];

    // Evaluate password strength
    if (password.length >= 8) {
      strength += 25;
    } else {
      tips.push('Use at least 8 characters.');
    }
    if (/[A-Z]/.test(password)) {
      strength += 25;
    } else {
      tips.push('Add an uppercase letter (A-Z).');
    }
    if (/\d/.test(password)) {
      strength += 25;
    } else {
      tips.push('Include a number (0-9).');
    }
    if (/[@$!%*?&#]/.test(password)) {
      strength += 25;
    } else {
      tips.push('Use a special character (@, $, %, etc.).');
    }

    let feedback = 'Weak';
    if (strength >= 90) feedback = 'Strong';
    else if (strength >= 75) feedback = 'Very Strong';
    else if (strength >= 50) feedback = 'Medium';

    return { strength, feedback, tips };
  };

  const { strength, feedback, tips } = calculateStrength(password);

  return (
    <View style={styles.container}>
      <Text style={styles.feedback}>{feedback}</Text>
      <ProgressBar
        progress={strength / 100}
        color={strength >= 75 ? 'green' : strength >= 50 ? 'orange' : 'red'}
        style={styles.progressBar}
      />
      {tips.length > 0 && (
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsHeader}>Tips to improve your password:</Text>
          {tips.map((tip, index) => (
            <Text key={index} style={styles.tip}>
              • {tip}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginVertical: 10,
    width: 300,
    height: 20,
  },
  feedback: {
    fontSize: 14,
    fontWeight: 'bold',
    //marginBottom: 5,
    textAlign: 'right',
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
  },
  tipsContainer: {
    //marginTop: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  tipsHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  tip: {
    fontSize: 12,
    color: '#555',
  },
});

export default PasswordMeter;
