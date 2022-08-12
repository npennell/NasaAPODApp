import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function App() {
  let [startDate, setStartDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [resultsNum, setResultsNum] = useState(0)

  return (
    <View style={styles.container}>
      <View style={styles.titleHeader}>
        <Text style={styles.titleText}>Picture of the day</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.subHeaderText}>Picture of the day:</Text>
        <Text style={styles.bodyText}>Search for Astronomy: Picture of the day by date.</Text>
        <TextInput 
          placeholder="Start Date"
          paddingVertical="5%"
          style={styles.dateInput}
        />
        <TextInput 
          placeholder="End Date"
          paddingVertical="5%"
          style={styles.dateInput}
        />
        <TouchableOpacity>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultsContainer}>
        <Text>Results ({resultsNum}):</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleHeader: {
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: '15%',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  bodyContainer: {
    padding: '5%',
    paddingTop: '10%'
  },
  subHeaderText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  bodyText: {
    fontSize: 15,
    paddingTop: '2%'
  },
  dateInput: {
    height: '20%',
    width: '100%',
    // backgroundColor: '#E0EAE5',
    color: 'black',
  },
  resultsContainer: {
    padding: '5%',
    // paddingTop: '1%'
  },
});
