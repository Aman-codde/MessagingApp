import Input from "./Input";
import { Alert, StyleSheet, View } from "react-native";
import { useState } from "react";
import Button from "../UI/Button";

function ComposeForm({ onSubmit }) {
  const [inputValues, setInputValues] = useState({
    receiver: "",
    title: "",
    body: "",
  });

  function inputChangeHandler(inputIdentifier, enteredInput) {
    setInputValues((curInputValues) => {
      return { ...curInputValues, [inputIdentifier]: enteredInput };
    });
  }

  function submitHandler() {
    const messageData = {
      receiver: inputValues.receiver,
      title: inputValues.title,
      body: inputValues.body,
    };

    if (
      messageData.receiver.trim().length == 0 ||
      messageData.title.trim().length == 0 ||
      messageData.body.trim().length == 0
    ) {
      Alert.alert("Invalid Input! Please Enter all fields.");
      return;
    }
    onSubmit(messageData);
  }

  return (
    <View>
      <Input
        placeholder="Recipient"
        textInputConfig={{
          maxLength: 20,
          onChangeText: inputChangeHandler.bind(this, "receiver"),
          value: inputValues.receiver,
        }}
      ></Input>
      <Input
        placeholder="Subject"
        textInputConfig={{
          maxLength: 50,
          onChangeText: inputChangeHandler.bind(this, "title"),
          value: inputValues.title,
        }}
      ></Input>
      <Input
        placeholder="Description"
        textInputConfig={{
          multiline: true,
          maxLength: 100,
          onChangeText: inputChangeHandler.bind(this, "body"),
          autocorrect: false,
          value: inputValues.body,
        }}
      ></Input>
      <Button label="Send" style={styles.button} onPress={submitHandler} />
    </View>
  );
}

export default ComposeForm;

const styles = StyleSheet.create({
  button: {
    width: 100,
    textAlign: "left",
  },
});
