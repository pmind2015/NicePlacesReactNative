import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import PlacesListScreen from "./src/screen/PlacesListScreen";
import NewPlaceScreen from "./src/screen/NewPlaceScreen";
import PlaceDetailScreen from "./src/screen/PlaceDetailScreen";
import MapScreen from "./src/screen/MapScreen";
import { initDb, insertPlace, getPlaces, clearPlaces } from "./src/helpers/db";
import Colors from "./src/constants/Colors";
import placesReducer from "./src/store/places-reducer";

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  data: placesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  useEffect(() => {
    initDb()
      .then(result => {
        // (async () => {
        //   console.log("Өгөгдлүүдийг базд хийх гэж байна...");
        //   const r1 = await insertPlace(
        //     "Коффее1",
        //     "file://hello.jpg",
        //     "хаяг№",
        //     23.12,
        //     -33.233
        //   );
        //   console.log("Эхний бичлэгийн ID", r1.insertId);
        //   const r2 = await insertPlace(
        //     "Бассейн1",
        //     "file://bassein.jpg",
        //     "хаяг2",
        //     33.12,
        //     -22.233
        //   );
        //   console.log("Хоёрдахь бичлэгийн ID", r2.insertId);
        //   const result = await getPlaces();
        //   console.log("Үр дүн: ", result.rows._array);
        // await clearPlaces();
        // })();
        console.log("Базыг бэлтгэж дууслаа...");
      })
      .catch(err => console.log("Базыг бэлтгэхэд асуудал гарлаа!", err));
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Places"
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 22
            }
          }}
        >
          <Stack.Screen name="Places" component={PlacesListScreen} />
          <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
          <Stack.Screen
            name="NewPlace"
            component={NewPlaceScreen}
            options={{ title: "Шинэ газар хадгалах" }}
          />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
