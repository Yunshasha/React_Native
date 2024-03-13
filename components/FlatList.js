import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

function FlatListTest() {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

// flatList-selectable

// const SeletedItem = ({ item, backgroundColor, textColor, onPress }) => {
//   <TouchableOpacity
//     style={[styles.item, { backgroundColor }]}
//     onPress={onPress}
//   >
//     <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
//   </TouchableOpacity>;
// };

//  const FlatListSelectable = () => {
//   const [selectedID, setSelectedID] = useState();
//   const backgroundColor = item.id === selectedID ? "#6e3b6e" : "#f9c2ff";
//   const textColor = item.id === selectedID ? "white" : "black";

//   const renderItem = ({ item }) => {
//     return (
//       <SeletedItem
//         item={item}
//         backgroundColor={backgroundColor}
//         textColor={textColor}
//         onPress={() => setSelectedID(item.id)}
//       />
//     );
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedID}
//       />
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: "blue",
  },
  item: {
    padding: 20,
    backgroundColor: "#f9c2ff",
    margin: 10,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default FlatListTest;
