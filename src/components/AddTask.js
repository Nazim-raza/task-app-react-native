import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Modal,
} from "react-native";
import React, { useState } from "react";

const AddTask = ({ handleAddTaskButton, handleHideModal }) => {
  const [task, setTask] = useState("");
  //Handle input value
  const handleInputValue = (inputTask) => {
    setTask(inputTask);
  };
  const addTask = () => {
    if (!task) {
      return Alert.alert("Please Add Value");
    }
    handleAddTaskButton(task);
  };

  return (
    <Modal animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputValue}
          style={styles.inputBox}
          placeholder="Add your Task"
        />
        <View style={styles.btnGroup}>
          <View style={styles.btn}>
            <Button onPress={addTask} title="Add Task" />
          </View>
          <View style={styles.btn}>
            <Button title="CANCEL" onPress={handleHideModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
  btnGroup: {
    flexDirection: "row",
    marginTop: 20,
  },
  btn: {
    width: "40%",
    marginHorizontal: 20,
  },
});

export default AddTask;
