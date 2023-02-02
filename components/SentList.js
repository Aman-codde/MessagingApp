import { FlatList, Text } from "react-native";

function renderSentItem(data) {
  return (
    <Text>
      {data.item.receiver}: {data.item.body}
    </Text>
  );
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
