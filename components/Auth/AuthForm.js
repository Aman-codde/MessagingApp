import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import Input from "../MessageForm/Input";
import Button from "../UI/Button";

function AuthForm({ onAuthenticate }) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function updateInputHandler(inputType, enteredValue) {
    switch (inputType) {
      case "username":
        setEnteredUsername(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    if (
      enteredUsername.trim().length == 0 ||
      enteredPassword.trim().length == 0
    ) {
      Alert.alert("Invalid input! Please enter both username and password");
      return;
    }
    onAuthenticate({ email: enteredUsername, password: enteredPassword });
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input
          placeholder="Username"
          textInputConfig={{
            onChangeText: updateInputHandler.bind(this, "username"),
            value: enteredUsername,
          }}
        />
        <Input
          placeholder="Password"
          textInputConfig={{
            onChangeText: updateInputHandler.bind(this, "password"),
            value: enteredPassword,
          }}
        />
        <View style={styles.button}>
          <Button onPress={submitHandler} label="Log in"></Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
  },
  button: {
    marginTop: 12,
  },
  form: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 6,
    width: 250,
  },
});
