import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./src/Task";

export default function App() {
  return (
    <View>
      <Task />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
