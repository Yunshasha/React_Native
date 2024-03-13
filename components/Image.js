import React from "react";
import { Image, StyleSheet, View } from "react-native";

function DisplayAnImage() {
  return (
    <View style={styles.container}>
      <View style={styles.image_row}>
        <Image
          style={{ width: 66, height: 56 }}
          source={require("../assets/favicon.png")}
        />
        <Image
          style={styles.logo}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
  image_row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default DisplayAnImage;
