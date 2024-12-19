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
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold", // Make heading bold for emphasis
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 40, // Increased bottom margin to space out the button
    textAlign: "left",
    color: "#333", // Darker color for better contrast and readability
  },
  button: {
    width: 250, // Slightly larger button for better clickability
    paddingVertical: 12, // Vertical padding for a better height
    paddingHorizontal: 30, // Horizontal padding for a wider button
    backgroundColor: "#FF00FF", // Button background color
    borderRadius: 8, // Rounded corners for a more modern look
    alignItems: "center", // Center text horizontally in the button
    justifyContent: "center", // Center text vertically in the button
    elevation: 3, // Add shadow effect for Android devices
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity for subtle effect
    shadowRadius: 5, // Shadow blur radius
  },
  buttonText: {
    fontSize: 16,
    color: "#fff", // White text color for contrast
    fontWeight: "bold", // Make button text bold for emphasis
  },
});

export default SuccessPage;
