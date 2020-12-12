import * as sqlite from "expo-sqlite";

const db = sqlite.openDatabase("places1.db");

export const initDb = () => {
  return createPromise(
    "CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);",
    []
  );
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
  return createPromise(
    "insert into places (title, imageUri, address, lat, lng) values (?, ?, ?, ?, ?)",
    [title, imageUri, address, lat, lng]
  );
};

export const getPlaces = () => {
  return createPromise("select * from places", []);
};

export const clearPlaces = () => {
  return createPromise("delete from places", []);
};

const createPromise = (sql, parameters) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        sql,
        parameters,
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
