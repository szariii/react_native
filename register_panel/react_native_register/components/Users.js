import { FlatList, Text, View } from "react-native";
import React, { Component, useState, useEffect } from "react";
import Settings from "./Settings.json";
import Item from "./Item";

const Users = ({ navigation }) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    console.log("Weszlo w effecta bez effecta");
    const fetchData = async () => {
      console.log("Weszlo w effecta");
      const fetchBody = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `http://${Settings.address}:${Settings.port}/get`,
        fetchBody
      );
      const json = await response.json();
      setUsersList(json);
    };
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={usersList}
        renderItem={({ item }) => (
          <Item
            navigation={navigation}
            key={item.id}
            username={item.username}
            id={item.id}
            password={item.password}
            date={item.date}
            setUsersList={setUsersList}
          />
        )}
      />
    </View>
  );
};

export default Users;
