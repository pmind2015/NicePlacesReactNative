import React from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import MapPreview from "../components/MapPreview";

const MapScreen = ({ navigation, route }) => {
  const { place } = route.params;

  console.log(place);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: place.title });
  }, [place]);

  const showFullMap = () => {
    navigation.navigate("Map", {selectedLocation: {lat: place.lat, lng: place.lng} })
  }

  return (
    <ScrollView>
      <Image source={{uri: place.imageUri}} style={{height: '35%', minHeight: 300, width: '100%', backgroundColor: '#ccc'}}/>
     
      <MapPreview 
      onPress={showFullMap}
      selectedLocation={{lat: place.lat, lng:place.lng}}
      style={{
        width: "100%",
        height: 300,
        borderColor: "#ccc",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
      }}/>
    </ScrollView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
