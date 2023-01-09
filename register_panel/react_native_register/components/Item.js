import { View, Image, Text, StyleSheet } from "react-native";
import MyButton from "./MyButton";
import Settings from "./Settings.json";

const Item = ({ id, username, setUsersList, navigation, password, date }) => {
  const deleteUser = async () => {
    console.log(`http://${Settings.address}:${Settings.port}/delete`);
    const fetchBody = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    const response = await fetch(
      `http://${Settings.address}:${Settings.port}/delete`,
      fetchBody
    );
    const json = await response.json();
    setUsersList(json);
  };

  const userDetails = () => {
    navigation.navigate("details", {
      username: username,
      password: password,
      date: date,
    });
  };

  return (
    <View style={styles.item}>
      <View style={styles.operationView}>
        <View style={styles.operationElements}>
          <Image
            style={styles.image}
            source={require("../assets/img/profileImg.png")}
          />
        </View>
        <View style={styles.operationElements}>
          <MyButton
            style={styles.button}
            text={"DETAILS"}
            action={userDetails}
          />
        </View>
        <View style={styles.operationElements}>
          <MyButton style={styles.button} text={"DELETE"} action={deleteUser} />
        </View>
      </View>
      <View style={styles.infoElement}>
        <Text style={styles.textStyle}>{`${id}:${username}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    maxWidth: 100,
    maxHeight: 100,
  },

  textStyle: {
    fontSize: 20,
    color: "#757575",
  },

  operationView: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  operationElements: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 100,
    minHeight: 100,
  },

  infoElement: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Item;
