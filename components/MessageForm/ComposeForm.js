import Input from "./Input";
import { View } from "react-native";
import { useState } from "react";

function ComposeForm() {
  const [inputValues, setInputValues] = useState({
    receiver: "",
    sender: "aman",
    title: "",
    body: "",
  });

  function inputChangeHandler(inputIdentifier, enteredInput) {
    setInputValues((curInputValues) => {
      return { ...curInputValues, [inputIdentifier]: enteredInput };
    });
  }

  return (
    <View>
      <Input
        placeholder="Recipient"
        textInputConfig={{
          maxLength: 10,
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
    </View>
  );
}

export default ComposeForm;
