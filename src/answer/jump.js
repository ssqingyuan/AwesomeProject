import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    NativeModules,
    Button,
    SectionList
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import imgarray from '../image/imageLoad'




export default function Jump({ route, navigation }) {


    const { key } = route.params;
    var target = new String(key)

    var value;
    var imgUrl;
    const answers = require("./answers.json");
    for (var i = 0; i < answers.data.length; i++) {
        var mkey = new String(answers.data[i].key);

        if (parseInt(target) == parseInt(mkey)) {

            value = new String(answers.data[i].value);
            imgUrl = new String(answers.data[i].imgUrl);
        }

    }
    
    return (
       
        <View style={styles.pageViewStyle}>
            <Text style={styles.fontClass}>{value}</Text>
            <Image style = {styles.imgStyle} source={imgarray ['png'+imgUrl]} style={{ }} />
        </View>


    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft:50,
        marginHorizontal: 16
    },
    imgStyle: {
        //flex:1,
         width: 100, 
         height: 200,
         position:{
             top:50
         }
         //justifyContent: 'center',
        // alignItems: 'center',
       // marginBottom:50,
        //marginTop:50,
        //marginRight:100
    },
    pageViewStyle: {
        flex: 1,
        backgroundColor: '#C6E2FF',
        bottom: 0,
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontClass: {
        //flex:1,
        //marginTop:100,
        color: '#080808',
        fontWeight: 'bold',
        fontSize: 20
    },
});

