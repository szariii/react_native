import { View, TextInput, Image, StyleSheet } from "react-native";

const Details = ({ route }) => {
  const { username, password, date } = route.params;
  console.log(username);
  return (
    <View style={styles.details}>
      <Image source={require("../assets/img/profileImg.png")} />
      <TextInput style={styles.headers}>login:</TextInput>
      <TextInput style={styles.info}>{username}</TextInput>
      <TextInput style={styles.headers}>password:</TextInput>
      <TextInput style={styles.info}>{password}</TextInput>
      <TextInput style={styles.headers}>registered:</TextInput>
      <TextInput style={styles.info}>
        {new Date(date).toLocaleString()}
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  info: {
    fontSize: 30,
    color: "#303F9F",
  },

  headers: {
    fontSize: 20,
    color: "#757575",
  },
});

export default Details;
