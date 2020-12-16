import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ navigation, route }) => {
  const [markerLocation, setMarkerLocation] = React.useState(
    route.params.selectedLocation
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={saveMarkerLocation}>
          <Text style={{ color: "#fff", marginHorizontal: 10, marginTop: 2 }}>
            Хадгал
          </Text>
        </TouchableOpacity>
      ),
      title: "Байршлыг сонгоно уу"
    });
  }, [markerLocation]);

  const saveMarkerLocation = () => {
    if (!markerLocation) {
      alert(
        "Та дуртай газрынхаа байршлыг газрын зураг дээрээс эхлээд сонгоно уу."
      );
      return;
    }

    navigation.navigate("NewPlace", { markerLocation });
  };

  const handleMapPress = event => {
    setMarkerLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    });
  };

  return (
    <MapView
      onPress={handleMapPress}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: markerLocation.lat,
        longitude: markerLocation.lng,
        latitudeDelta: 0.02922,
        longitudeDelta: 0.00121
      }}
    >
      {markerLocation && (
        <Marker
          coordinate={{
            latitude: markerLocation.lat,
            longitude: markerLocation.lng
          }}
        />
      )}
    </MapView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
