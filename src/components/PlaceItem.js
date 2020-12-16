import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const PlaceItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30
      }}
    >
      <Image
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#ccc",
          borderColor: Colors.primary,
          borderWidth: 1
        }}
        source={{ uri: item.imageUri }}
      />

      <View
        style={{
          marginLeft: 25,
          justifyContent: "center",
          alignItems: "flex-start"
        }}
      >
        <Text style={{ color: "black", fontSize: 18 }}>{item.title}</Text>
        <Text style={{ color: "#666", fontSize: 16 }}>{item.lat}</Text>
        <Text style={{ color: "#666", fontSize: 16 }}>{item.lng}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
