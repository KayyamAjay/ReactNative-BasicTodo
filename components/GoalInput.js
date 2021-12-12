import React from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";
const GoalInput = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="CourseGoal"
          style={styles.input}
          value={props.text}
          onChangeText={props.onChange}
        />
        <View style={styles.button}>
          <View style={styles.buttonwidth}>
            <Button color="red" onPress={props.close} title="Cancel" />
          </View>
          <View style={styles.buttonwidth}>
            <Button onPress={props.onClick} title="Add" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 15,
  },
  button: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    width: "60%",
  },
  buttonwidth: {
    width: "40%",
  },
});

export default GoalInput;
