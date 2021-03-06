import React from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import { addPlace } from "../store/places-actions";
import ImagePicker from "../components/ImagePicker";
import LocationPicker from "../components/LocationPicker";

const MapScreen = props => {
  const dispatch = useDispatch();
  const [place, setPlace] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState();
  const [selectedLocation, setSelectedLocation] = React.useState();

  React.useEffect(() => {
    if (props.route.params) {
      console.log("Газар сонгогдлоо: ", props.route.params);
      setSelectedLocation(props.route.params.markerLocation);
    }
  }, [props.route]);

  const savePlace = () => {
    dispatch(addPlace(place, selectedImage, selectedLocation));
    props.navigation.goBack();
  };

  return (
    <ScrollView style={{ paddingHorizontal: 20 }}>
      <Text style={{ marginVertical: 15, fontSize: 18 }}>
        Газрын нэрийг оруул
      </Text>

      <TextInput
        value={place}
        onChangeText={text => setPlace(text)}
        style={{
          marginBottom: 15,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          paddingHorizontal: 2,
          paddingVertical: 4
        }}
      />

      <ImagePicker
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      <LocationPicker
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        gotoMap={() => {
          props.navigation.navigate("Map", { selectedLocation });
        }}
      />

      <View style={{ paddingHorizontal: 110 }}>
        <Button title="Хадгал" onPress={savePlace} />
      </View>
    </ScrollView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
