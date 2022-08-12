import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";

export default function MainPage(props) {
  let [startDate, setStartDate] = useState("2022-02-20");
  let [endDate, setEndDate] = useState("2022-02-28");
  const [resultsNum, setResultsNum] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResultsNum(results.length);
  }, [results]);

  const fetchPhotos = async () => {
    const basicUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const fullUrl =
      basicUrl + "&start_date=" + startDate + "&end_date=" + endDate;
    console.log(basicUrl);
    await fetch(fullUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data);
      });
    console.log(results);
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
        <TextInput
          placeholder="Start Date"
          paddingVertical="5%"
          style={styles.dateInput}
          onChangeText={(newText) => setStartDate(newText)}
          defaultValue={"2022-02-26"}
        />
        <TextInput
          placeholder="End Date"
          paddingVertical="5%"
          style={styles.dateInput}
          onChangeText={(newText) => setEndDate(newText)}
          defaultValue={"2022-02-28"}
        />
        <TouchableOpacity onPress={() => fetchPhotos()}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultsContainer}>
        <Text>Results ({resultsNum}):</Text>
        <Text>{results.length}</Text>
        <View style={styles.iconGrid}>
          <FlatList
            data={results}
            renderItem={({ item, i }) => renderPhotos(item, i)}
            style={styles.iconList}
            numColumns={3}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    padding: "5%",
    paddingTop: "10%",
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
    height: "20%",
    width: "100%",
    // backgroundColor: '#E0EAE5',
    color: "black",
  },
  resultsContainer: {
    padding: "5%",
    flex: 1,
    // paddingTop: '1%'
  },
  icons: {
    width: 100,
    height: 100,
    margin: 10,
  },
  iconContainer: {
    padding: "10%",
    // width: "50%",
  },
  iconGrid: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
  },
  iconList: {
    flexWrap: "wrap",
    // padding: "10%",
  },
});
