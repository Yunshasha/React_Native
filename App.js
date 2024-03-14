import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { Button as RNButton } from "react-native";
import CreatePostScreen from "./component/CreatePostScreen";
import ImageHeaderScreen from "./component/ImageHeaderScreen";

const HomeButton = (props) => {
  return (
    <RNButton
      color="rgb(174,174,178)"
      titleStyle={{ color: "black" }}
      {...props}
    />
  );
};

function LogoTitle() {
  return (
    <Image
      style={{ height: 50, width: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1 }}>
      <HomeButton
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Detail", {
            itemId: 86,
            otherParam: "this is others info",
          })
        }
      />
      <HomeButton
        title="Go to post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Text style={{ margin: 20 }}>Post : {route.params?.post}</Text>

      <HomeButton
        title="Go to ImageHeader Screen"
        onPress={() => navigation.navigate("ImageHeader")}
      />
    </View>
  );
}

function DetailScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> This is DetailScreen</Text>
      <Text>itemId : {JSON.stringify(itemId)}</Text>
      <Text>otherParam : {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Detail ....again"
        onPress={() =>
          navigation.push("Detail", { itemId: Math.floor(Math.random() * 100) })
        }
      />
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      <Button title="GO Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to the first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
            color: "blue",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Overview",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          initialParams={{ itemId: 42 }}
          options={{
            headerTintColor: "#f4511e",
          }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{
            title: "submit you post",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
              color: "blue",
            },
          }}
        />

        <Stack.Screen
          name="ImageHeader"
          component={ImageHeaderScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    color: "blue",
  },
});
