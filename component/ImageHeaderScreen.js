import React from "react";
import { Image, Text, View } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={{ height: 50, width: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}
function ImageHeaderScreen() {
  return (
    <View>
      <Text>This is a screen with a customized header</Text>
    </View>
  );
}

export default ImageHeaderScreen;
