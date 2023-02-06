import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ label, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{label}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 100,
  },
  buttonContainer: {
    height: 30,
    borderRadius: 4,
    margin: 8,
    padding: 8,
    backgroundColor: "darkblue",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.2,
    backgroundColor: "lightlue",
    borderRadius: 4,
  },
});
