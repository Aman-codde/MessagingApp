import { TextInput, View, StyleSheet } from "react-native";

function Input({ textInputConfig, placeholder }) {
  const inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={inputStyles}
        {...textInputConfig}
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    alignContent: "left",
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 16,
    marinBottom: 4,
  },
  input: {
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 4,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
