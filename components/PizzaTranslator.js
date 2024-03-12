import React, { useState } from "react";
import { TextInput, View, Text, ActivityIndicator } from "react-native";

function PizzaTranslator() {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={{ padding: 10 }}
        placeholder="Type here to translate"
        onChangeText={(e) => setText(e)}
        value={text}
      />
      <Text style={{ color: "blue", padding: 20 }}>
        {text
          .split(" ")
          .map((word) => word && "haha")
          .join(" ")}
      </Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

export default PizzaTranslator;
