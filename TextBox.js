import { Pressable, Text, View } from "react-native";

export default function TextBox({ text }) {
  function press() {
    console.log("pressed");
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Text</Text>
      <Pressable
        style={{
          borderWidth: 2,
          padding: 2,
          margin: 10,
          backgroundColor: "pink",
        }}
        onPress={press}
      >
        <Text>Press</Text>
      </Pressable>
    </View>
  );
}
