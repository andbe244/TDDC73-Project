import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import DateOfBirth from '@/components/DateOfBirth';

interface State {
  fullName: string;
  username: string;
  email: string;
  gender: string;
  password: string;
  dateOfBirth: Date;
  showDatePicker: boolean;
  termsAccepted: boolean;
}

export default class Index extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fullName: '',
      username: '',
      email: '',
      gender: '',
      password: '',
      dateOfBirth: new Date(),
      showDatePicker: false,
      termsAccepted: false,
    };
  }

  handleDateChange = (event: unknown, selectedDate?: Date) => {
    this.setState({ showDatePicker: false });
    if (selectedDate) {
      this.setState({ dateOfBirth: selectedDate });
    }
  };

  handleRegister = () => {
    const { fullName, username, email, gender, password, dateOfBirth, termsAccepted } = this.state;
    if (!termsAccepted) {
      Alert.alert('Error', 'You must accept the terms and conditions.');
      return;
    }

    Alert.alert(
      'Registration Info',
      `Name: ${fullName}\nUsername: ${username}\nEmail: ${email}\nGender: ${gender}\nDOB: ${dateOfBirth.toDateString()}`
    );
  };

  render() {
    const { fullName, username, email, gender, password, dateOfBirth, showDatePicker, termsAccepted } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Join with your email address</Text>
        <View style={styles.form}>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfWidth]}
              placeholder="Full Name"
              value={fullName}
              onChangeText={(text) => this.setState({ fullName: text })}
            />
            <TextInput
            style={[styles.input, styles.halfWidth]}
            placeholder="Username"
            value={username}
            onChangeText={(text) => this.setState({ username: text })}
          />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => this.setState({ email: text })}
            keyboardType="email-address"
          />

          <View style={styles.row}>
          <DateOfBirth
            selectedDate={dateOfBirth}
            onDateChange={(newDate) => this.setState({ dateOfBirth: newDate })}
          />
            
            <Picker
              selectedValue={gender}
              onValueChange={(value: string) => this.setState({ gender: value })}
              style={[styles.input, styles.halfWidth]}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => this.setState({ password: text })}
            secureTextEntry={true}
          />
          <View style={styles.row}>
            <Button
              title="Select Date of Birth"
              onPress={() => this.setState({ showDatePicker: true })}
            />
            <Text style={styles.dateText}>
              {dateOfBirth.toDateString()}
            </Text>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={dateOfBirth}
              mode="date"
              display="default"
              onChange={this.handleDateChange}
            />
          )}
          {/* <View style={styles.checkboxContainer}>
            <CheckBox
              value={termsAccepted}
              onValueChange={(value: string) => this.setState({ termsAccepted: value })}
            />
            <Text style={styles.checkboxText}>
              I acknowledge that I have read and accept the{' '}
              <Text style={styles.link}>Terms of Use Agreement</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </View> */}
          <Button title="Create Account" onPress={this.handleRegister} />
        </View>
      </View>
    );
  }
}

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
    width: '60%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  halfWidth: {
    width: '48%',
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
});
