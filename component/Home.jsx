import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://dummyapi.io/data/v1/user", {
        headers: {
          "app-id": "62a7615b6559d72899f80e39",
        },
      });

      if (response.status === 200) {
        setData(response?.data?.data);
      }
    }
    getData();
  }, []);

  const handlePress = (id) => {
    setSelectedId(id);
    setTimeout(() => {
      navigation.navigate("Detail", { id });
    }, 1000);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "red" : "lightgray";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => handlePress(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
