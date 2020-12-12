import React from "react";
import { StyleSheet, Button, View } from "react-native";
import MapPreview from "./MapPreview";

const LocationPicker = () => {
  return (
    <View style={{ marginBottom: 15 }}>
      <MapPreview
        style={{
          width: "100%",
          height: 150,
          borderColor: "#ccc",
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15
        }}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Button title="Миний байршил" />
        <Button title="Байршил сонгох" />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({});
