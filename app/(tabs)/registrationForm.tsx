import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputField from '@/components/InputField';
import PasswordMeter from '@/components/PasswordMeter';
import DateOfBirth from '@/components/DateOfBirth';
import GenderPicker from '@/components/GenderPicker';

interface RegistrationFormProps {
  onRegister: (userInfo: string) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegister }) => {
  const [fullName, setFullName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

  const handleDateOfBirthChange = (day: string, month: string, year: string) => {
    setDay(day);
    setMonth(month);
    setYear(year);
  };

  const isPasswordMatching = () => {
    return password === confirmPassword;
  };

  const isFormComplete = () =>
    fullName.trim() &&
    username.trim() &&
    email.trim() &&
    gender &&
    password &&
    confirmPassword &&
    isPasswordMatching();
  
    const handleRegister = () => {
        if (!isFormComplete()) {
            Alert.alert("Error", "Please fill in all fields and ensure passwords match.");
            return;
        }
        
        const formattedDOB = `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`;

        const formattedDate = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
        const formattedDateString = formattedDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });

    const userInfo = `Name: ${fullName}\nUsername: ${username}\nEmail: ${email}\nGender: ${gender}\nDate of Birth: ${formattedDateString}`;
    onRegister(userInfo);
    };
      
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Register Here</Text>
        <View style={styles.row}>
          <InputField label="Full Name" value={fullName} onChangeText={setFullName} />
          <InputField label="Username" value={username} onChangeText={setUsername} />
        </View>

        <InputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <View style={styles.row}>
            <View style={styles.halfWidth}>
                <DateOfBirth
                  label="Date of Birth"
                  day={day}
                  month={month}
                  year={year}
                  onDateOfBirthChange={handleDateOfBirthChange}
                />
            </View>

            <View style={styles.halfWidth}>
                <GenderPicker label="Gender" selectedGender={gender} onGenderChange={setGender} />
            </View>
        </View>

        <InputField
          style={styles.passwordInput}
          label="Password"
          value={password}
          onChangeText={setPassword}
          togglePasswordVisibility={true}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
        {isPasswordFocused && <PasswordMeter password={password} />}
        <InputField
          style={styles.passwordInput}
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          togglePasswordVisibility={true}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />

        {!isPasswordMatching() && confirmPassword !== "" && (
        <Text style={styles.errorText}>Passwords do not match</Text>
        )}
        
        {isPasswordMatching() && confirmPassword !== "" && (
        <Text style={styles.successText}>Passwords match!</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={!isFormComplete}>
            <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    width: 500,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    fontSize: 14,
    marginTop: 10,
  },
  picker: {
    height: 30,
    marginTop: 15,
    borderColor: '#fff',
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    fontSize: 14,
  },
  halfWidth: {
    width: '48%',
  },
  leftSide: {
    width: '60%',
  },
  rightSide: {
    width: '40%',
    backgroundColor: "pink",
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkboxText: {
    marginLeft: 8,
    flex: 1,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  genderButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  genderButton: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#f0f0f0",
  },
  selectedButton: {
    backgroundColor: "#007BFF",
  },
  genderText: {
    color: "#333",
    fontSize: 14,
  },
  passwordInput: {
    height: 40,
    borderBottomWidth: 1,
    padding: 5,
    borderBottomColor: '#ccc',
    fontSize: 16,
    color: '#000',
    backgroundColor: 'transparent',
    marginBottom: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 15,
  },
  successText: {
    color: "green",
    fontSize: 12,
    marginBottom: 15,
  },
  button: {
    width: 250, 
    paddingVertical: 12, 
    paddingHorizontal: 30, 
    marginTop: 20,
    backgroundColor: "#FF00FF", 
    borderRadius: 20, 
    alignItems: "center", 
    justifyContent: "center",
    alignSelf: 'center',
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

export default RegistrationForm;
