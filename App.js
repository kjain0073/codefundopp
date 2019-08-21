import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Detector de Fake News</Text>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.input}
            returnKeyType="send"
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 30,
    paddingBottom: 20
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#CCC",
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
    paddingTop: 8
  }
});
