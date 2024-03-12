import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ButtonTest from "./components/Button";
import PizzaTranslator from "./components/PizzaTranslator";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <PizzaTranslator />
      <ButtonTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
