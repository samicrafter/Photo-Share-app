import {  Button, ScrollView, StyleSheet, TextInput } from 'react-native';
import { View, Text, Image } from 'react-native';

import ImageBox from "./components/ImageBox"
import ImageCard from "./components/ImageCard"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import TextBox from './components/TextBox';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={(route) => {
          return {
            headerShown: false
          }
        }}
      >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Textbox' component={TextBox}/>
      </Tab.Navigator>
    </NavigationContainer>
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
