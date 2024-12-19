import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RegistrationForm from "./registrationForm";
import SuccessPage from "./successPage";

export default function Index() {
  const [userInfo, setUserInfo] = useState<string | null>(null); // State to hold user info after registration
  //const [userInfo, setUserInfo] = useState<string | null>("Test User Info");

  console.log("Rendering Index component..."); // Log when Index renders
  console.log("Current userInfo state: ", userInfo); // Log current state of userInfo

  return (
    <View style={styles.container}>
      {userInfo ? (
        <>
          {console.log("Rendering SuccessPage with userInfo:", userInfo)} {/* Debug log */}
          <SuccessPage userInfo={userInfo} onBack={() => {
            console.log("Back button clicked, resetting userInfo..."); // Log when back button is clicked
            setUserInfo(null); // Reset userInfo
          }} />
        </>
      ) : (
        <>
          {console.log("Rendering RegistrationForm...")} {/* Debug log */}
          <RegistrationForm
            onRegister={(info) => {
              console.log("onRegister called with info: ", info); // Log info received from RegistrationForm
              setUserInfo(info); // Update userInfo state
            }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
