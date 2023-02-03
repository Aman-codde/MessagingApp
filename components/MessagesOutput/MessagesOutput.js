import { View } from "react-native";
import MessagesList from "./MessagesList";

function MessagesOutput({ messages }) {
  return (
    <View>
      <MessagesList messages={messages} />
    </View>
  );
}

export default MessagesOutput;
