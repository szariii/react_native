import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import MyButton from "./MyButton";
import { useState } from "react";
import Settings from "./Settings.json";

const Main = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [id, setId] = useState(0);

  const clickHandler = async () => {
    console.log(Settings.address);
    console.log(Settings.port);
    console.log(`http://${Settings.address}:${Settings.port}/add`);
    const date = Date.now();
    const fetchBody = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        id: id,
        date: date,
      }),
    };
    const response = await fetch(
      `http://${Settings.address}:${Settings.port}/add`,
      fetchBody
    );
    const json = await response.json();
    console.log(json);
    if (json.communicate === "user exist") {
      alert("uzytkownik o podanym loginie istnieje");
    } else {
      setId(id + 1);
      navigation.navigate("users");
    }
  };

  const changeValueHandler = (text, set) => {
    set(text);
  };
  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register </Text>
          <Text style={styles.headerText}>App</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyTextElement}>
            <Text style={styles.bodyText}>Welcome in app!</Text>
          </View>
          <View style={styles.bodyElements}>
            <TextInput
              style={styles.input}
              placeholder="enter username"
              placeholderTextColor="#303F9F"
              underlineColorAndroid={"#303F9F"}
              value={username}
              onChangeText={(newText) =>
                changeValueHandler(newText, setUsername)
              }
            />
          </View>

          <View style={styles.bodyElements}>
            <TextInput
              style={styles.input}
              placeholder="enter password"
              placeholderTextColor="#303F9F"
              underlineColorAndroid={"#303F9F"}
              value={password}
              onChangeText={(newText) =>
                changeValueHandler(newText, setPassword)
              }
            />
          </View>
          <View style={styles.bodyElementsButton}>
            <MyButton
              text={"register"}
              action={clickHandler}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#303F9F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    // height: 50,
    // marginLeft: 100,
    // marginRight: 100,
    // display: "flex",
    // alignSelf: "stretch",
    // alignItems: "center",
    // justifyContent: "center",
  },

  headerText: {
    color: "#C5CAE9",
    fontSize: 48,
  },

  input: {
    flex: 1,
    alignSelf: "stretch",
    color: "#303F9F",
    padding: 0,
  },

  bodyText: {
    color: "#757575",
  },

  bodyTextElement: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  bodyElements: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  bodyElementsButton: {
    flex: 1,
    minWidth: 100,
    alignSelf: "center",
  },

  keyboardAvoidingView: {
    flex: 1,
  },

  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    padding: 30,
    paddingBottom: 100,
  },

  main: {
    flex: 1,
  },
});

export default Main;
