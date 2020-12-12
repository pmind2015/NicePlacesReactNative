import { getPlaces, insertPlace } from "../helpers/db";

export const ADD_PLACE = "ADD_PLACE";
export const LOAD_PLACES = "LOAD_PLACES";

export const addPlace = (placeName, imageUri) => {
  return async dispatch => {
    // sqlite баз руу бичилт хийх хэсэг
    const newPlaceObj = await insertPlace(
      placeName,
      imageUri,
      "хаяг дэлгэрэнгүй",
      23.12,
      -33.233
    );

    console.log(newPlaceObj);

    dispatch({
      type: ADD_PLACE,
      data: {
        id: newPlaceObj.insertId,
        title: placeName,
        imageUri
      }
    });
  };
};

export const loadPlaces = () => {
  return async dispatch => {
    // sqlite базаас уншилт хийх хэсэг
    const dbResult = await getPlaces();
    const rows = dbResult.rows._array;

    console.log(rows);

    dispatch({
      type: LOAD_PLACES,
      data: rows
    });
  };
};
