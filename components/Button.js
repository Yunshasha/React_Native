import React from "react";
import {
  SafeAreaView,
  View,
  Button,
  Text,
  Alert,
  StyleSheet,
} from "react-native";

const Separator = () => {
  return <View style={styles.separator} />;
};
function ButtonTest() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text_content}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="press me"
          onPress={() => Alert.alert("heihei, simple button pressed")}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.text_content}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button.
        </Text>
        <Button
          title="press me"
          color="#00ff0f"
          onPress={() => Alert.alert("a button with adjusted color pressed")}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.text_content}>
          All interaction for the component are disabled.
        </Text>
        <Button
          title="press me"
          disabled
          onPress={() => Alert.alert("can not press this one")}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.text_content}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToButton}>
          <Button
            title="left button"
            onPress={() => Alert.alert("left button is pressed")}
          />
          <Button
            title="right button"
            onPress={() => Alert.alert("right button is pressed")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  container: {
    marginHorizontal: 10,
    flex: 1,
    justifyContent: "center",
  },
  text_content: {
    marginVertical: 6,
  },
  fixToButton: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ButtonTest;
