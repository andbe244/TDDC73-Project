import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  progress: number; 
  color: string; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBarBackground}>
        <View
          style={[
            styles.progressBarForeground,
            { width: `${progress * 100}%`, backgroundColor: color },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: 350,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 0,
  },
  progressBarBackground: {
    height: 8,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  progressBarForeground: {
    height: '100%',
    borderRadius: 5,
  },
});

export default ProgressBar;
