import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface SuccessPageProps {
  userInfo: string;
  onBack: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ userInfo, onBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration Successful</Text>
      <Text style={styles.userInfo}>{userInfo}</Text>

      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Back to Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: "left",
    color: "#333", 
  },
  button: {
    width: 250, 
    paddingVertical: 12, 
    paddingHorizontal: 30, 
    backgroundColor: "#FF00FF", 
    borderRadius: 20, 
    alignItems: "center", 
    justifyContent: "center", 
    elevation: 3, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
  },
  buttonText: {
    fontSize: 16,
    color: "#fff", 
    fontWeight: "bold", 
  },
});

export default SuccessPage;
