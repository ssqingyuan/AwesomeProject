import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, NativeModules, ScrollView, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Questions from './src/question/questions'
//import Constants from "expo-constants";


export default function app(){
  return (
    <Questions  />
);
}