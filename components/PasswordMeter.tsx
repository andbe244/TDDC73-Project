import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar'; // Import your custom ProgressBar

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
      tips.push('Use at least 8 characters');
    }
    if (/[A-Z]/.test(password)) {
      strength += 25;
    } else {
      tips.push('Add an uppercase letter (A-Z)');
    }
    if (/\d/.test(password)) {
      strength += 25;
    } else {
      tips.push('Include a number (0-9)');
    }
    if (/[@$!%*?&#]/.test(password)) {
      strength += 25;
    } else {
      tips.push('Use a special character (@, $, %, etc.)');
    }

    let feedback = 'Weak';
    if (strength >= 90) feedback = 'Very strong';
    else if (strength >= 75) feedback = 'Strong';
    else if (strength >= 50) feedback = 'Medium';

    return { strength, feedback, tips };
  };

  const { strength, feedback, tips } = calculateStrength(password);

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <ProgressBar
          progress={strength / 100} // A value between 0 and 1
          color={strength >= 75 ? 'green' : strength >= 50 ? 'orange' : 'red'} // Dynamic color
        />
        <Text style={styles.feedback}>{feedback}</Text>
      </View>
      {tips.length > 0 && (
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsHeader}>
            Tips to improve your password: {"\n"} <Text style={styles.tip}>• {tips.join(' • ')}.</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
    marginRight:20,
  },
  feedback: {
    fontSize: 14,
    fontWeight: 'bold',
    //textAlign: 'right',
    right: 10,
    marginBottom: 5,
  },
  tipsContainer: {
    width: 450,
    //maxWidth: 600,
    height: 60,
    padding: 10,
    backgroundColor: '#f9f9f9',
    //borderWidth: 1,
    //borderColor: '#ddd',
    //borderRadius: 5,
    marginLeft: 1,
    marginBottom: 20,
    marginRight:18,
    
  },
  tipsHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  tip: {
    fontSize: 9,
    color: '#555',
  },
});

export default PasswordMeter;
