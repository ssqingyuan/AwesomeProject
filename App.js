import * as React from 'react';
import { Button, View, Text,StyleSheet ,TextInput, NativeModules, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {

  return (
    <View style={styles.pageViewStyle}>
      <ScrollView>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}>  &emsp;问题1</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}>  &emsp;问题1</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}>  &emsp;问题1</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}>  &emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}> &emsp;&emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}> &emsp;&emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}> &emsp;&emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}> &emsp;&emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}> &emsp;&emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}> &emsp;&emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}> &emsp;&emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}> &emsp;&emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}> &emsp;&emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}> &emsp;&emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>
        <Text style = {styles.fontClass}>账户问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem1')}> &emsp;&emsp;问题1</Text>
        <Text style = {styles.fontClass}>VIP问题</Text>
        <Text style = {styles.bigBlue}  onPress={() => navigation.navigate('problem2')}> &emsp;&emsp;怎么取消自动续费</Text>

        <Button
          title="其他问题反馈"
          onPress = {() =>{NativeModules
                     .IntentMoudle
                   .startActivityFromJS("com.awesomeproject.SqyRnActivity", null);}}
        //onPress={() => navigation.navigate('details')}
        />
      </ScrollView>
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
    pageViewStyle:{
    //  position: 'absolute',
    //   right:160,
    //     weight:300,
    // //height:300,
        flex:1,
    backgroundColor:'#C6E2FF',
    //position:'absolute',
    bottom:0,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
    fontClass:{
      color :'#080808',
        fontWeight :'bold',
        fontSize:20
    },

  bigBlue: {
      flex:1,
    color: '#00FFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  red: {
    color: 'red',
  },
});

export default App;
