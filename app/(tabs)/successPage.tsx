import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const SuccessPage: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thank you for registering!</Text>
      <Button title="Go Back to Register" onPress={() => navigation.navigate('Index')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

//export default ThankYou;
