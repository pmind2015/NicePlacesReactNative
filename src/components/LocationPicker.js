import React from "react";
import { StyleSheet, Button, View } from "react-native";
import MapPreview from "./MapPreview";
import * as Location from "expo-location";

const LocationPicker = ({ selectedLocation, setSelectedLocation, gotoMap }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Та дуртай газраа хадгалахын тулд Location эрхийг зөвшөөрнө үү.");
      return;
    }

    // Location эрхийг зөвшөөрлөө
    // Төхөөрөмжийн байрлалыг олцгооё

    setIsLoading(true);
    let location = await Location.getCurrentPositionAsync({});
    setIsLoading(false);

    console.log("Төхөөөрөмжийн байршил:", location);
    setSelectedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    });
  };

  return (
    <View style={{ marginBottom: 15 }}>
      <MapPreview
        onPress={gotoMap}
        isLoading={isLoading}
        selectedLocation={selectedLocation}
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
        <Button title="Миний байршил" onPress={getCurrentLocation} />
        <Button title="Байршил сонгох" onPress={gotoMap} />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({});
