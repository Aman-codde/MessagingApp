import { FlatList, Text } from "react-native";
import MessageItem from "./MessageItem";

function renderMessageItem(data) {
  return <MessageItem {...data.item} />;
}

function InboxList({ inboxMessages }) {
  return (
    <FlatList
      data={inboxMessages}
      renderItem={renderMessageItem}
      keyExtractor={(item) => item.id}
      alwaysBounceVertical={false}
    ></FlatList>
  );
}

export default InboxList;
