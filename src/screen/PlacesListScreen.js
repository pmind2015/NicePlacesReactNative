import React from "react";
import { StyleSheet, Text, View, Platform, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import MyHeaderButton from "../components/MyHeaderButton";
import { loadPlaces } from "../store/places-actions";
import PlaceItem from "../components/PlaceItem";

export default ({ navigation }) => {
  const places = useSelector(state => state.data.places);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadPlaces());
  }, [dispatch]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Шинэ газар нэмэх"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => navigation.navigate("NewPlace")}
          />
        </HeaderButtons>
      ),
      title: "Миний дуртай газрууд"
    });
  }, [navigation]);

  return (
    <View>
      {places && (
        <FlatList
          data={places}
          keyExtractor={item => item.id.toString()}
          renderItem={data => (
            <PlaceItem
              item={data.item}
              onPress={() => {
                navigation.navigate("PlaceDetail", { place: data.item });
              }}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
