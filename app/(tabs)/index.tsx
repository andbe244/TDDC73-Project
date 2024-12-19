import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View>
        <Text style={styles.white}> hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  white: {
    color: "white",
  },
});
