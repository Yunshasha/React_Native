import React, { useState } from "react";
import { TextInput, View, Text, Button, StyleSheet } from "react-native";

function CreatePostScreen({ navigation }) {
  const [postText, setPostText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.inputBox}
        multiline
        placeholder="what do you want to write down"
        value={postText}
        onChangeText={(e) => setPostText(e)}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button
          title="submit"
          onPress={() =>
            navigation.navigate({
              name: "Home",
              params: { post: postText },
              merge: true,
            })
          }
        />

        <Button
          title="upadate screen title"
          onPress={() => navigation.setOptions({ title: "updated!" })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    height: 200,
    padding: 10,
    backgroundColor: "white",
  },
});
export default CreatePostScreen;
