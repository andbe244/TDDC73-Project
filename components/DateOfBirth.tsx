import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert } from 'react-native';

// Define the props interface
interface DateOfBirthProps {
  label: string;               // Label for the date of birth component
  day: string;                 // Initial value for the day
  month: string;               // Initial value for the month
  year: string;                // Initial value for the year
  onDateOfBirthChange: (day: string, month: string, year: string) => void; // Function to handle date of birth change
}

const DateOfBirth: React.FC<DateOfBirthProps> = ({ label, day, month, year, onDateOfBirthChange }) => {
  const [inputDay, setInputDay] = useState(day);
  const [inputMonth, setInputMonth] = useState(month);
  const [inputYear, setInputYear] = useState(year);

  // Function to validate the entered date of birth
  const validateDateOfBirth = () => {
    const dayInt = parseInt(inputDay);
    const monthInt = parseInt(inputMonth);
    const yearInt = parseInt(inputYear);

    // Check if all fields are filled
    if (!inputDay || !inputMonth || !inputYear) {
      Alert.alert('Error', 'Please fill all the fields');
      return false;
    }

    // Check if day, month, year are numbers and within reasonable ranges
    if (isNaN(dayInt) || isNaN(monthInt) || isNaN(yearInt)) {
      Alert.alert('Error', 'Please enter valid numbers');
      return false;
    }

    if (monthInt < 1 || monthInt > 12) {
      Alert.alert('Error', 'Please enter a valid month (1-12)');
      return false;
    }

    // Define number of days in each month
    const daysInMonth = [
      31, // January
      28, // February (non-leap year check will be handled later)
      31, // March
      30, // April
      31, // May
      30, // June
      31, // July
      31, // August
      30, // September
      31, // October
      30, // November
      31, // December
    ];

    // Check for leap year in February
    if (monthInt === 2) {
      const isLeapYear = (yearInt % 4 === 0 && (yearInt % 100 !== 0 || yearInt % 400 === 0));
      if (isLeapYear) {
        daysInMonth[1] = 29; // February has 29 days in a leap year
      }
    }

    if (dayInt < 1 || dayInt > daysInMonth[monthInt - 1]) {
      Alert.alert('Error', `Invalid day for the given month. Please enter a valid day (1-${daysInMonth[monthInt - 1]})`);
      return false;
    }

    // Check if the year is reasonable (optional, e.g., between 1900 and current year)
    const currentYear = new Date().getFullYear();
    if (yearInt < 1900 || yearInt > currentYear) {
      Alert.alert('Error', `Please enter a valid year (1900-${currentYear})`);
      return false;
    }

    // If all checks pass, update the parent component with the new date of birth
    onDateOfBirthChange(inputDay, inputMonth, inputYear);
    Alert.alert('Success', `Date of Birth is: ${inputDay}/${inputMonth}/${inputYear}`);
    return true;
  };

  // Handle day, month, year changes with input length restrictions
  const handleDayChange = (text: string) => {
    const truncatedText = text.substring(0, 2);  // Limit day to 2 digits
    setInputDay(truncatedText);
    onDateOfBirthChange(truncatedText, inputMonth, inputYear);
  };

  const handleMonthChange = (text: string) => {
    const truncatedText = text.substring(0, 2);  // Limit month to 2 digits
    setInputMonth(truncatedText);
    onDateOfBirthChange(inputDay, truncatedText, inputYear);
  };

  const handleYearChange = (text: string) => {
    const truncatedText = text.substring(0, 4);  // Limit year to 4 digits
    setInputYear(truncatedText);
    onDateOfBirthChange(inputDay, inputMonth, truncatedText);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.row}>
        {/* Day Input */}
        <TextInput
          style={styles.input}
          value={inputDay}
          onChangeText={handleDayChange}
          placeholder="DD"
          keyboardType="numeric"
          placeholderTextColor="#888" // Set placeholder text color to gray
        />
        {/* Month Input */}
        <TextInput
          style={styles.input}
          value={inputMonth}
          onChangeText={handleMonthChange}
          placeholder="MM"
          keyboardType="numeric"
          placeholderTextColor="#888" // Set placeholder text color to gray
        />
        {/* Year Input */}
        <TextInput
          style={styles.input}
          value={inputYear}
          onChangeText={handleYearChange}
          placeholder="YYYY"
          keyboardType="numeric"
          placeholderTextColor="#888" // Set placeholder text color to gray
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '30%',
    height: 40,
    borderColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 14,
    //borderRadius: 5,
  },
});

export default DateOfBirth;
