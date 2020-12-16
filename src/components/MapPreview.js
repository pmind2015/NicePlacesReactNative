import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";

const MapPreview = props => {
  if (props.isLoading) {
    return (
      <View style={{ ...props.style }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={{ ...props.style }}>
      {props.selectedLocation ? (
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${props.selectedLocation.lat},%20${props.selectedLocation.lng}&zoom=17&size=1600x800&maptype=roadmap%20&markers=color:red%7Clabel:S%7C${props.selectedLocation.lat},%20${props.selectedLocation.lng}&key=AIzaSyAu3PxWHAQrm55DnoqcZI0tUxPHzZLG4GM`
          }}
        />
      ) : (
        <Text>Та байрлалаа сонгоно уу...</Text>
      )}
    </TouchableOpacity>
  );
};

export default MapPreview;

const styles = StyleSheet.create({});
