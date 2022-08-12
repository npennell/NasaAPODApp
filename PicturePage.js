import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PicturePage(props) {
  const [photoData, setPhotoData] = useState(null);
  useEffect(() => {
    console.log(props.route.params.photoData);
    setPhotoData(props.route.params.photoData);
  }, [props]);

  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("MainScreen")}
        >
          <Icon name="arrow-left" type="font-awesome-5" color="black" />
        </TouchableOpacity>
        {photoData !== null && (
          <Text style={styles.titleText}>{photoData.title}</Text>
        )}
      </View>
      {/* <View> */}
      {/* {photoData !== null && ( */}
      <>
        <View style={{ flex: 1 }}>
          <Image
            source={{
              uri: "https://apod.nasa.gov/apod/image/2202/albireoSpectrum1024.jpg",
            }}
            style={styles.photoStyle}
          />
        </View>
        {/* <ScrollView>
              <Text>{photoData.explanation}</Text>
            </ScrollView> */}
      </>
      {/* )} */}
      {/* </View>r */}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: "5%",
    paddingTop: "15%", // adding to allow space from top notch on iOS
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  titleText: {
    paddingLeft: "15%",
    alignContent: "center",
  },
  photoStyle: {
    width: "100%",
    width: "100%",
    margin: 10,
  },
});
