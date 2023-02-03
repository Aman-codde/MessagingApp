import { FlatList } from "react-native";
import MessageItem from "./MessageItem";

function renderMessageItem(data) {
  return <MessageItem {...data.item} />;
}

function MessagesList({ messages }) {
  return (
    <FlatList
      data={messages}
      renderItem={renderMessageItem}
      keyExtractor={(item) => item.id}
      alwaysBounceVertical={false}
    ></FlatList>
  );
}

export default MessagesList;
