/**
 * MainPage is the main Picture of the Day page shown in the app
 */

import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";

export default function MainPage(props) {
  const [startDate, setStartDate] = useState("0000-00-00");
  const [endDate, setEndDate] = useState("0000-00-00");
  const [resultsNum, setResultsNum] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (results.code === 400) {
      setResultsNum(0);
    } else {
      setResultsNum(results.length);
    }
  }, [results]);

  const fetchPhotos = async () => {
    const basicUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const fullUrl =
      basicUrl + "&start_date=" + startDate + "&end_date=" + endDate;
    await fetch(fullUrl)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      });
  };

  const renderPhotos = (item, i) => {
    return (
      <View key={i}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("PhotoScreen", { photoData: item })
          }
        >
          <Image source={{ uri: item.url }} style={styles.icons} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleHeader}>
        <Text style={styles.titleText}>Picture of the day</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.subHeaderText}>Picture of the day:</Text>
        <Text style={styles.bodyText}>
          Search for Astronomy: Picture of the day by date.
        </Text>
        <View style={{ justifyContent: "space-around" }}>
          <TextInput
            placeholder="Start Date"
            paddingVertical="5%"
            style={styles.dateInput}
            onChangeText={(newText) => setStartDate(newText)}
          />
          <TextInput
            placeholder="End Date"
            paddingVertical="5%"
            style={styles.dateInput}
            onChangeText={(newText) => setEndDate(newText)}
          />
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => fetchPhotos()}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultsContainer}>
        <Text>Results ({resultsNum}):</Text>
        {results.length === 0 || results.code === 400 ? (
          <Text style={styles.resultsText}>
            No results found. Enter a start and end date.
          </Text>
        ) : (
          <View style={styles.iconGrid}>
            <FlatList
              data={results}
              renderItem={({ item, i }) => renderPhotos(item, i)}
              style={styles.iconList}
              numColumns={3}
              directionalLockEnabled={true}
            />
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  searchButton: {
    borderWidth: 1,
    borderRadius: 5,
    alignContent: "center",
    padding: "2%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
  },
  titleHeader: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15%",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  bodyContainer: {
    paddingHorizontal: "5%",
    paddingTop: "10%",
    marginBottom: "-40%",
  },
  subHeaderText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  bodyText: {
    fontSize: 15,
    paddingTop: "2%",
  },
  dateInput: {
    height: "22%",
    width: "100%",
    backgroundColor: "#F5F7FB",
    color: "black",
    padding: "2%",
  },
  resultsContainer: {
    paddingHorizontal: "5%",
    flex: 1,
    marginBottom: "10%",
  },
  icons: {
    width: 110,
    height: 110,
    margin: 5,
  },
  iconContainer: {
    padding: "5%",
  },
  iconGrid: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
  },
  iconList: {
    flexWrap: "wrap",
  },
  resultsText: {
    paddingTop: "2%",
  },
});
