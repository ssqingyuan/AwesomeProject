import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { StackActions, NavigationActions } from '@react-navigation/native';

//
// import 'react-native-gesture-handler';
// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { createAppContainer, createStackNavigator,StackActions, NavigationActions } from '@react-navigation/stack';
// import HomePage from './src/pages/home/HomePage';
// import MyPage from './src/pages/my/MyPage';
//
//
// const AppNavigator = function createStackNavigator(
//     {Home: {screen: HomePage,}, Details: {screen: MyPage,},},
//     {initialRouteName: 'Home',}
// );
//
// export default createAppContainer(AppNavigator);
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}