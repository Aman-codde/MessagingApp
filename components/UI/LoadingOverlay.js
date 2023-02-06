import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

function LoadingOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <ActivityIndicator size="large" color="blue"></ActivityIndicator>
    </View>
  );
}
export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
