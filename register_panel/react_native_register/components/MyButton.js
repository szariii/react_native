import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MyButton = ({ text, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.myButton}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  myButton: {
    flex: 1,
    maxHeight: 50,
    backgroundColor: "#303F9F",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#FFFFFF",
  },
});

export default MyButton;
