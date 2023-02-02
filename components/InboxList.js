import { FlatList, Text } from "react-native";

function renderMessageItem(data) {
  return (
    <Text>
      {data.item.sender}: {data.item.body}
    </Text>
  );
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
