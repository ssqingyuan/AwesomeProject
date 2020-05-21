import * as React from 'react';
import { Button, View, Text,StyleSheet ,TextInput, NativeModules} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
      // function   onPressButton(){
      //      alert("开始跳转了");
      //       NativeModules
      //   .IntentMoudle
      //   .startActivityFromJS("com.awesomeproject.SqyRnActivity", null);
      //   }
//NativeModules.IntentMoudle.startActivityFromJS("SqyRnActivity", null)
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Text>Home Screen</Text>
      <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}>问题1</Text>
      <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}>问题2</Text>

      <Button
        title="其他问题"
            onPress = {() =>{NativeModules
                     .IntentMoudle
                   .startActivityFromJS("com.awesomeproject.SqyRnActivity", null);}}
        //onPress={() => navigation.navigate('details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
        style={{
          height: 120,
              weight: 480,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
            <Button title="提交" onPress={() => {alert("提交成功")}}/>
    </View>
  );
}
function Problem1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style = {[styles.bigBlue,styles.red]}>问题一</Text>
    </View>
  );
}
function Problem2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style = {[styles.bigBlue,styles.red]}>问题二</Text>
    </View>
  );
}
function Problem3() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style = {[styles.bigBlue,styles.red]}>问题三</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '常见问题' }}
          />
        <Stack.Screen name="problem1" component={Problem1} />
      <Stack.Screen name="problem2" component={Problem2} />
      <Stack.Screen name="problem3" component={Problem3} />
      <Stack.Screen name="details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default App;
