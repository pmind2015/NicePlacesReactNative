import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const MapPreview = props => {
  return (
    <View style={{ ...props.style }}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/staticmap?center=47.91904738696607,%20106.91761499986501&zoom=17&size=1600x800&maptype=roadmap%20&markers=color:red%7Clabel:S%7C47.91904738696607,%20106.91761499986501&key=AIzaSyAu3PxWHAQrm55DnoqcZI0tUxPHzZLG4GM"
        }}
      />
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({});
