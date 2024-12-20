import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface DateOfBirthProps {
  label: string;
  day: string;
  month: string;
  year: string;
  onDateOfBirthChange: (day: string, month: string, year: string) => void;
}

const DateOfBirth: React.FC<DateOfBirthProps> = ({ label, day, month, year, onDateOfBirthChange }) => {
  const [inputDay, setInputDay] = useState(day);
  const [inputMonth, setInputMonth] = useState(month);
  const [inputYear, setInputYear] = useState(year);
  const [errors, setErrors] = useState({ day: false, month: false, year: false });

  const validateDay = (day: string, month: string, year: string) => {
    const dayInt = parseInt(day);
    const monthInt = parseInt(month);
    const yearInt = parseInt(year);
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (monthInt === 2 && (yearInt % 4 === 0 && (yearInt % 100 !== 0 || yearInt % 400 === 0))) {
      daysInMonth[1] = 29;
    }

    return isNaN(dayInt) || dayInt < 1 || dayInt > (daysInMonth[monthInt - 1] || 31);
  };

  const validateMonth = (month: string) => {
    const monthInt = parseInt(month);
    return isNaN(monthInt) || monthInt < 1 || monthInt > 12;
  };

  const validateYear = (year: string) => {
    const yearInt = parseInt(year);
    const currentYear = new Date().getFullYear();
    return isNaN(yearInt) || yearInt < 1918 || yearInt > 2018;
  };

  const handleDayChange = (text: string) => {
    const truncatedText = text.substring(0, 2);
    setInputDay(truncatedText);
    setErrors({
      ...errors,
      day: validateDay(truncatedText, inputMonth, inputYear),
    });
    onDateOfBirthChange(truncatedText, inputMonth, inputYear);
  };

  const handleMonthChange = (text: string) => {
    const truncatedText = text.substring(0, 2);
    setInputMonth(truncatedText);
    setErrors({
      ...errors,
      month: validateMonth(truncatedText),
    });
    onDateOfBirthChange(inputDay, truncatedText, inputYear);
  };

  const handleYearChange = (text: string) => {
    const truncatedText = text.substring(0, 4);
    setInputYear(truncatedText);
    setErrors({
      ...errors,
      year: validateYear(truncatedText),
    });
    onDateOfBirthChange(inputDay, inputMonth, truncatedText);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.row}>
        <TextInput
          style={[styles.input, errors.day && styles.errorInput]}
          value={inputDay}
          onChangeText={handleDayChange}
          placeholder="DD"
          keyboardType="numeric"
          placeholderTextColor="#888"
        />
        <TextInput
          style={[styles.input, errors.month && styles.errorInput]}
          value={inputMonth}
          onChangeText={handleMonthChange}
          placeholder="MM"
          keyboardType="numeric"
          placeholderTextColor="#888"
        />
        <TextInput
          style={[styles.input, errors.year && styles.errorInput]}
          value={inputYear}
          onChangeText={handleYearChange}
          placeholder="YYYY"
          keyboardType="numeric"
          placeholderTextColor="#888"
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
  },
  errorInput: {
    borderBottomColor: 'red',
    color: 'red',
  },
});

export default DateOfBirth;
