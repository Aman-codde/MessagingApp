import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

function MessageItem({ id, sender, title, body, receiver }) {
  let messanger;
  receiver ? (messanger = receiver) : (messanger = sender);

  const navigation = useNavigation();
  function messagePressHandler() {
    navigation.navigate("ManageMessage", {
      messageId: id,
    });
  }
  return (
    <Pressable
      onPress={messagePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.msgContainer}>
        <Text style={styles.senderText}>{messanger}</Text>
        <Text style={styles.titleText}>{title}</Text>
        <Text>{body}</Text>
      </View>
    </Pressable>
  );
}

export default MessageItem;

const styles = StyleSheet.create({
  msgContainer: {
    flexDirection: "column",
    padding: 8,
    margin: 6,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  senderText: {
    fontSize: 18,
    marginBottom: 4,
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 16,
    marginBottom: 2,
  },
  pressed: {
    opacity: 0.2,
    backgroundColor: "darkgrey",
  },
});
