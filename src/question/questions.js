import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    NativeModules,
    Button,
    SectionList
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Jump from '../answer/jump'
//import Constants from "expo-constants";

const questions = require("./questions.json");

function HomeScreen({ navigation }) {

    var dataSource = new Map();
    var keyMap = new Map();
    for (var i = 0; i < questions.questions.length; i++) {
        var mset = new Set(dataSource.get(questions.questions[i].type));
        var str = new String();
        str = String(questions.questions[i].value);
        mset.add(str);
        dataSource.set(questions.questions[i].type, mset);
       // alert(String(questions.questions[i].key))
        keyMap.set(str,String(questions.questions[i].key))
    }

    var datas = [];
    for (let [key, value] of dataSource) {
        var mySet = new Set(value);
        var array = []
        var i = 0;
        for (let item of mySet) {
            array[i] = item;
            i++;
        }

        datas.push({ data: array, title: key });
    }
    return (
        <View style={styles.pageViewStyle}>
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={datas}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index }) => <Text style={styles.title}
                        onPress={
                            () => navigation.navigate('Jump',{key:String(keyMap.get(item))})
                        }
                    >{item}</Text>}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
                <Button
                    title="其他问题反馈"
                    style={{ flex: 1 }}
                    onPress={() => {
                        NativeModules
                            .IntentMoudle
                            .startActivityFromJS("com.awesomeproject.SqyRnActivity", null);
                    }}
                //onPress={() => navigation.navigate('details')}
                />
            </SafeAreaView>



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
                <Stack.Screen name="Jump" component={Jump} options={{title:'答案详情'}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
       // marginLeft:20,
       marginHorizontal: 16
    },
    item: {
        //backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        // backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    },
    pageViewStyle: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontClass: {
        color: '#080808',
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default App;
