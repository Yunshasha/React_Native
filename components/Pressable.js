import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

function PressableTest() {
  const [timesPressed, SetTimesPressed] = useState(0);
  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => SetTimesPressed((cur) => cur + 1)}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "rgb(210,230,255)" : "white" },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => <Text>{pressed ? "Pressed!" : "Press Me"}</Text>}
      </Pressable>

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
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  wrapperCustom: {
    borderRadius: 8,
  },
});

export default PressableTest;
