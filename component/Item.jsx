import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Item = ({ item, onPress, backgroundColor, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>
        {item.title} {item.firstName} {item.lastName}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
