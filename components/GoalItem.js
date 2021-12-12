import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItems: {
    padding: 15,
    margin: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 100 / 2,
  },
});
export default GoalItem;
