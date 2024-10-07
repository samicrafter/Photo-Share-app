// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  Button,
  Pressable,
  Alert,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";

import { useDimensions } from "@react-native-community/hooks";

import { useState, useEffect } from "react";
import ImageViewer from "./Components/Image";
// const images = [1,2,3,4,5,6]

export default function App() {
  console.log(useDimensions);
  const [count, setCount] = useState(0);
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph} numberOfLines={1} onPress={handlePress}>
        {count}
      </Text>
      <Pressable onPress={handlePress}>
        <ImageViewer
          placeholderImageSource={{
            uri: `https://picsum.photos/${100 + count}/${100 + count}`,
          }}
          incount={count}
          fadeDuration={1500}
        />
        <Text>hELLO</Text>
      </Pressable>
      <View style={{ width: 150, padding: 20, margin: 0 }}>
        <Button
          onPress={() => setCount(count + 1)}
          title="Go next"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={{ width: 150, padding: 20, margin: -20 }}>
        <Button
          onPress={() => setCount(count - 1)}
          title="Go back"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      {/* <TouchableHighlight onPress={() => console.log("Udith can't get girls")}> */}
      <Pressable
        onPress={() =>
          Alert.alert("decide", "y/n", [
            {
              text: "yes",
              onPress: () => {
                console.log("Pressed YES");
              },
            },
            {
              text: "no",
              onPress: () => {
                console.log("Pressed No");
              },
            },
          ])
        }
        style={{
          // width: 100,
          // height: 40,
          borderRadius: 18,
          backgroundColor: "white",
          padding: 10,
        }}
        android_ripple={{ color: "lightgrey" }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          very very very big Button
        </Text>
      </Pressable>
      {/* </TouchableHighlight> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B212E",
    alignItems: "center",
    justifyContent: "center",
    // padding: 8,
    padding: Platform.OS === "android" ? StatusBar.currentHeigh : 0,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
