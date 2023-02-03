import { StyleSheet, View, Text } from "react-native";
import MessagesList from "./MessagesList";

function MessagesOutput({ messages, info }) {
  let content = <Text style={styles.infoText}>{info}</Text>;
  if (messages.length > 0) {
    content = <MessagesList messages={messages} />;
  }

  return <View>{content}</View>;
}

export default MessagesOutput;

const styles = StyleSheet.create({
  infoText: {
    marginTop: 32,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "darkblue",
  },
});
