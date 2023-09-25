import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const TaskItem = ({ index, item, handleDelete }) => {
  return (
    <View style={styles.taskItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={handleDelete.bind(this, item.id)}>
        <Text>
          {index + 1} : {item.task}
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  taskItem: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "green",
    color: "white",
  },
});

export default TaskItem;
