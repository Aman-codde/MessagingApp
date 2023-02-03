import { FlatList } from "react-native";
import MessageItem from "./MessageItem";

function renderSentItem(data) {
  return <MessageItem {...data.item} />;
}

function SentList({ sentMessages }) {
  return (
    <FlatList
      data={sentMessages}
      renderItem={renderSentItem}
      keyExtractor={(item, index) => item.id}
      alwaysBounceVertical={false}
    ></FlatList>
  );
}

export default SentList;
