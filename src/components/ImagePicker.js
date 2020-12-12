import React from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";

export default props => {
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status === "granted") {
      return true;
    } else {
      Alert.alert(
        "Анхаар",
        "Зураг авахын тулд манай аппд эрхүүдийг нь зөвшөөрч өгнө үү",
        [{ text: "Ok" }]
      );
    }
  };

  const takeImage = async () => {
    const hasPermission = verifyPermissions();

    if (!hasPermission) {
      return;
    }

    // Камерийг гаргана
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    props.setSelectedImage(image.uri);
  };

  return (
    <View style={{ alignItems: "center", marginBottom: 15 }}>
      <View
        style={{
          width: "100%",
          height: 150,
          borderColor: "#ccc",
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15
        }}
      >
        {props.selectedImage ? (
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: props.selectedImage }}
          />
        ) : (
          <Text>Зураг оруулаагүй байна. </Text>
        )}
      </View>

      <View style={{ width: 150 }}>
        <Button title="Зураг авах" onPress={takeImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
