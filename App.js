import React from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [text, setText] = React.useState("");
  const [courseGoal, setCourseGoals] = React.useState([]);
  const [showModal, setshowModal] = React.useState(false);
  const textChangeHandler = (enteredText) => {
    setText(enteredText);
  };
  const pressHandler = () => {
    setCourseGoals((prev) => [
      ...prev,
      { key: Math.random().toString(), value: text },
    ]);
    setshowModal(false);
    setText("");
  };
  const deleteHandler = (goalId) => {
    setCourseGoals((prev) => {
      return prev.filter((goal) => goal.key !== goalId);
    });
  };
  return (
    <View style={styles.root}>
      <Button
        title="Add tasks"
        onPress={() => {
          setshowModal(true);
        }}
      />
      <GoalInput
        visible={showModal}
        text={text}
        onChange={textChangeHandler}
        onClick={pressHandler}
        close={() => {
          setshowModal(false), setText("");
        }}
      />
      <FlatList
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            onDelete={deleteHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { padding: 50 },
});
