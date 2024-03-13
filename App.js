import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ButtonTest from "./components/Button";
import PizzaTranslator from "./components/PizzaTranslator";
import FlatListTest from "./components/FlatList";
import FlatListSelectable from "./components/FlatLIstSelectable";
import DisplayAnImage from "./components/Image";
import ImageBackgroundTest from "./components/ImageBackground";
import PressableTest from "./components/Pressable";
import SectionListTest from "./components/SectionList";
import SwitchTest from "./components/Switch";
import TextTest from "./components/Text";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <StatusBar style="auto" />
          <PizzaTranslator />
          <KeyboardAvoidingView>
            <ButtonTest />
            <FlatListTest />
          </KeyboardAvoidingView>

          <FlatListSelectable />
          <DisplayAnImage />
          <ImageBackgroundTest />
          <PressableTest />
          <SectionListTest />
          <SwitchTest />
          <TextTest />
        </ScrollView>
      </SafeAreaView>

      {/* <Stack.Navigator>
        <Stack.Screen name="home" component={SectionListTest} />
        <Stack.Screen name="profile" component={ImageBackgroundTest} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
