import React, { useState } from "react";
import { flushSync } from "react-dom";
import { StyleSheet, Switch, View } from "react-native";

function SwitchTest() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5ddbb" : "#f4f3f4"}
        value={isEnabled}
        onValueChange={() => setIsEnabled(!isEnabled)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SwitchTest;
