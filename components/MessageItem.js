import { Pressable, StyleSheet, Text, View } from "react-native";

function MessageItem({ sender, title, body, receiver }) {
  let messanger = "";
  receiver ? (messanger = receiver) : (messanger = sender);
  return (
    <Pressable>
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
    padding: 12,
    margin: 8,
    justifyContent: "space-between",
  },
  senderText: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 14,
    marginBottom: 2,
  },
});
