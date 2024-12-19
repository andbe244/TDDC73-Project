import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface SuccessPageProps {
  userInfo: string;
  onBack: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ userInfo, onBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration Successful</Text>
      <Text style={styles.userInfo}>{userInfo}</Text>
      <Button title="Back to Register" onPress={onBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 20 
  },
  heading: { 
    fontSize: 24, 
    marginBottom: 20, 
    textAlign: "center" 
  },
  userInfo: { 
    fontSize: 18, 
    marginBottom: 20, 
    textAlign: "center" 
  },
});

export default SuccessPage;
