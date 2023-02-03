import Input from "./Input";
import { View } from "react-native";

function composeHandler() {}

function ComposeForm() {
  return (
    <View>
      <Input
        placeholder="Recipient"
        textInputConfig={{
          maxLength: 10,
          onChangeText: composeHandler,
        }}
      ></Input>
      <Input
        placeholder="Subject"
        textInputConfig={{
          maxLength: 50,
          onChangeText: composeHandler,
        }}
      ></Input>
      <Input
        placeholder="Description"
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
