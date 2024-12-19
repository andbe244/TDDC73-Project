import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RegistrationForm from "./registrationForm";
import SuccessPage from "./successPage";

export default function Index() {
  const [userInfo, setUserInfo] = useState<string | null>(null);  // State to hold user info after registration

  return (
    <View style={styles.container}>
      {userInfo ? (
        <SuccessPage userInfo={userInfo} onBack={() => setUserInfo(null)} />
      ) : (
        <RegistrationForm onRegister={(info) => setUserInfo(info)} />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
