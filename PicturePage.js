import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PicturePage(props) {
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("MainScreen")}
          style={{ flex: 1, justifyContent: "flex-start" }}
        >
          <Icon name="arrow-left" type="font-awesome-5" color="black" />
        </TouchableOpacity>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.titleText}>
            {props.route.params.photoData.title}
          </Text>
        </View>
      </View>
      {/* <View> */}
      {/* {photoData !== null && ( */}
      <View style={styles.bodyContainer}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: props.route.params.photoData.url,
            }}
            style={styles.photoStyle}
          />
        </View>
        <ScrollView style={{ marginBottom: "100%" }}>
          <Text style={styles.bodyText}>
            Description: {props.route.params.photoData.explanation}
            {"\n"}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: "5%",
    paddingTop: "15%", // adding to allow space from top notch on iOS
    flexDirection: "row",
  },
  bodyContainer: {
    marginBottom: 100,
    height: "102%",
  },
  titleText: {
    marginLeft: "5%",
    alignContent: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  bodyText: {
    margin: "5%",
    fontSize: 15,
    // marginBottom: 150,
  },
  photoStyle: {
    width: "100%",
    width: "85%",
    // margin: 5,
    padding: 200,
  },
});
