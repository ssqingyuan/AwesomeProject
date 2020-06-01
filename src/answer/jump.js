import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
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
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.fontClass}>{value}</Text>
                </ScrollView>
                <Image style={styles.imgStyle} source={imgarray['png' + imgUrl]} />
            </View>
        </View>


    );

}
//<Text style={styles.fontClass}>{value}</Text>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        marginLeft: 0,
        marginBottom:100,
        //marginHorizontal: 16
    },
    imgStyle: {
        //flex: 1,
        height:300,
        width:420

    },
    pageViewStyle: {
        flex: 1,
        backgroundColor: '#C6E2FF',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontClass: {
        flex: 1,
        fontFamily: 'lucida grande',
        //tahoma, verdana, arial, sans-serif,
        fontSize: 20,
        color: '#141823'
    },
});

