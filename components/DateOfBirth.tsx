import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Props {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DateOfBirth: React.FC<Props> = ({ selectedDate, onDateChange }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const handleDayChange = (day: number) => {
    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    onDateChange(newDate);
  };

  const handleMonthChange = (month: number) => {
    const newDate = new Date(selectedDate.getFullYear(), month, selectedDate.getDate());
    onDateChange(newDate);
  };

  const handleYearChange = (year: number) => {
    const newDate = new Date(year, selectedDate.getMonth(), selectedDate.getDate());
    onDateChange(newDate);
  };

  return (
    <View style={styles.row}>
      {/* Day Picker */}
      <Picker
        selectedValue={selectedDate.getDate()}
        onValueChange={handleDayChange}
        style={[styles.picker, styles.thirdWidth]}
      >
        <Picker.Item label="Day" value="" />
        {days.map((day) => (
          <Picker.Item key={day} label={`${day}`} value={day} />
        ))}
      </Picker>

      {/* Month Picker */}
      <Picker
        selectedValue={selectedDate.getMonth()}
        onValueChange={handleMonthChange}
        style={[styles.picker, styles.thirdWidth]}
      >
        <Picker.Item label="Month" value="" />
        {months.map((month) => (
          <Picker.Item
            key={month}
            label={new Date(0, month).toLocaleString('default', { month: 'short' })}
            value={month}
          />
        ))}
      </Picker>

      {/* Year Picker */}
      <Picker
        selectedValue={selectedDate.getFullYear()}
        onValueChange={handleYearChange}
        style={[styles.picker, styles.thirdWidth]}
      >
        <Picker.Item label="Year" value="" />
        {years.map((year) => (
          <Picker.Item key={year} label={`${year}`} value={year} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginBottom: 15,
    width: '48%',
  },
  picker: {
    height: 30,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  thirdWidth: {
    width: '30%',
  },
});

export default DateOfBirth;
