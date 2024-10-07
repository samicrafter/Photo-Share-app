import {  Button, ScrollView, StyleSheet, TextInput } from 'react-native';
import { View, Text, Image } from 'react-native';

import ImageBox from "./ImageBox"

export default function Home() {
  const imageUrls = []
  for (let i = 0; i < 11; i++){
    imageUrls.push({
      url:"https://picsum.photos/500/600?random=" + Math.random(),
      url2:"https://picsum.photos/200/300?random=" + i
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {
        imageUrls.map((imgObj,ind) => {
          if (ind % 2 == 1){
            return // odd{
          }
          return <ImageBox
            imgObj1={imageUrls[ind]}
            imgObj2={imageUrls[ind + 1]}
          />
        })
      }
      {/* {
        imageUrls.map((img) => {
          console.log(img)
          return <ImageCard
          url={img.url}
          url2={img.url2}
        />
        })
      } */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
