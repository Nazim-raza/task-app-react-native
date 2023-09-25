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
  const [showModal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  //Handle Modal
  const handleModal = () => {
    setShowModal(true);
  };

  //Add Task Button
  const handleAddTaskButton = (task) => {
    if (task.trim() !== "") {
      setTaskList((prevTasks) => [
        ...prevTasks,
        { task: task, id: Math.random().toString() },
      ]);
      handleHideModal();
    }
  };

  //Handle Delete
  const handleDelete = (id) => {
    setTaskList((currentList) => currentList.filter((t) => t.id !== id));
  };

  //Hide modal
  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      {showModal && (
        <AddTask
          handleHideModal={handleHideModal}
          handleAddTaskButton={handleAddTaskButton}
        />
      )}
      <Button title="ADD TASK" onPress={handleModal} />
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
