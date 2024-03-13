import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

function PressableTest() {
  const [timesPressed, SetTimesPressed] = useState(0);
  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else {
    textLog = "onPress";
  }
  return (
    <View>
      <Pressable></Pressable>

      <View style={styles.logBox}>
        <Text>{textLog}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
    borderCurve: 3,
  },
});

export default PressableTest;
