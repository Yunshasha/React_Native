import React, { useState } from "react";
import { TextInput, View } from "react-native";

function TextTest() {
  const [value, setValue] = useState("placeholder");
  return (
    <View
      style={{
        borderColor: "#000000",
        margin: 20,
        borderWidth: 1,
      }}
    >
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        value={value}
        onChangeText={(e) => setValue(e)}
        style={{ paddingHorizontal: 5 }}
      />
    </View>
  );
}

export default TextTest;
