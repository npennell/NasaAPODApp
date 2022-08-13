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
        <View style={{ justifyContent: "space-around" }}>
          <TextInput
            placeholder="Start Date"
            paddingVertical="5%"
            style={styles.dateInput}
            onChangeText={(newText) => setStartDate(newText)}
            inputStyle={{ color: "black" }}
            //   defaultValue={"2022-02-26"}
          />
          <TextInput
            placeholder="End Date"
            paddingVertical="5%"
            style={styles.dateInput}
            onChangeText={(newText) => setEndDate(newText)}
            inputStyle={{ color: "black" }}
            //   defaultValue={"2022-02-28"}
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
        {/* <View style={styles.iconGrid}> */}
        {results.length === 0 ? (
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
        {/* <FlatList
            data={results}
            renderItem={({ item, i }) => renderPhotos(item, i)}
            style={styles.iconList}
            numColumns={3}
            directionalLockEnabled={true}
          /> */}
        {/* </View> */}
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
    // paddingTop: '1%'
    marginBottom: "10%",
  },
  icons: {
    width: 110,
    height: 110,
    margin: 5,
  },
  iconContainer: {
    padding: "5%",
    // width: "50%",
  },
  iconGrid: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
  },
  iconList: {
    flexWrap: "wrap",
    // padding: "10%",
  },
  resultsText: {
    paddingTop: "2%",
  },
});
