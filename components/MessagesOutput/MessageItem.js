import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

function MessageItem({ id, sender, title, body, receiver }) {
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
        <Text style={styles.senderText}>{receiver}</Text>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
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
    fontSize: 18,
    marginBottom: 8,
  },
  pressed: {
    opacity: 0.2,
    backgroundColor: "darkgrey",
  },
  body: {
    fontSize: 16,
  },
});
