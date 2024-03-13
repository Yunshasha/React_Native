import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

function ImageBackgroundTest() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    backgroundColor: "#000000c0",
    lineHeight: 84,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
export default ImageBackgroundTest;
