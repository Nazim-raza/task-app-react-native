import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

const Task = () => {
  const [taskList, setTaskList] = useState([]);

  //Add Task Button
  const handleAddTaskButton = (task) => {
    if (task.trim() !== "") {
      setTaskList((prevTasks) => [
        ...prevTasks,
        { task: task, id: Math.random().toString() },
      ]);
    }
  };

  //Handle Delete
  const handleDelete = (id) => {
    setTaskList((currentList) => currentList.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <AddTask handleAddTaskButton={handleAddTaskButton} />

      <Text style={styles.border}></Text>
      {taskList.length > 0 ? (
        <Text style={styles.textTitle}>Your Task :</Text>
      ) : (
        <Text style={styles.textTitle}>No Task :</Text>
      )}

      <FlatList
        data={taskList}
        renderItem={({ item, index }) => (
          <TaskItem handleDelete={handleDelete} item={item} index={index} />
        )}
        keyExtractor={(item, index) => {
          return index;
        }}
      />
      {/* <ScrollView> */}
      {/* {taskList?.map((taskItem, index) => (
              <Text style={styles.taskItem} key={index}>
                {taskItem}
              </Text>
            ))} */}
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputBox: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    padding: 5,
    paddingLeft: 15,
  },
  textTitle: {
    marginTop: 10,
    color: "blue",
    fontSize: 26,
    fontWeight: "bold",
  },
  border: {
    borderBottomWidth: 1,
    color: "#cccccc",
  },
});

export default Task;
