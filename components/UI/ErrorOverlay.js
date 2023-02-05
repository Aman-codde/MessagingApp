import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error Ocurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm} label="Okay" />
    </View>
  );
}
export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
