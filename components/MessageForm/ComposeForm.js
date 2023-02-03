import Input from "./Input";
import { View } from "react-native";

function composeHandler() {}

function ComposeForm() {
  return (
    <View>
      <Input
        label="To"
        textInputConfig={{
          maxLength: 10,
          onChangeText: composeHandler,
        }}
      ></Input>
      <Input
        label="Subject"
        textInputConfig={{
          maxLength: 50,
          onChangeText: composeHandler,
        }}
      ></Input>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          maxLength: 100,
          onChangeText: composeHandler,
          autocorrect: false,
        }}
      ></Input>
    </View>
  );
}

export default ComposeForm;
