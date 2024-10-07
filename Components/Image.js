import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, incount }) {
  // console.log(fontLength)
  return (
    <Image
      source={{
        uri: placeholderImageSource.uri,
      }}
      style={{
        width: 100 + 1 * incount,
        height: 100 + 1 * incount,
        borderRadius: 18,
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
