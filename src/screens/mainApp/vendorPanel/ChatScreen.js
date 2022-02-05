import React, { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    ScrollView,
    FlatList,
    Dimensions, 
    TextInput
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Header from "./utils/header";

const DATA=[
    {
        "id":"0",
        "name":"Rajesh",
        "duration":"5 hours",
        "msg":"Hi!! I am Rajesh",
        "time":"03:40pm"
    },
    {
        "id":"1",
        "name":"Suresh",
        "duration":"5 hours",
        "msg":"Hi!! I am Rajesh",
        "time":"03:45pm"
    },
    {
        "id":"2",
        "name":"John",
        "duration":"5 hours",
        "msg":"Hi!! I am Rajesh",
        "time":"03:33pm"
    },
    {
        "id":"3",
        "name":"Name4",
        "duration":"5 hours",
        "msg":"Hi!! I am Rajesh",
        "time":"03:33pm"
    },
    {
        "id":"4",
        "name":"Rajesh",
        "duration":"5 hours",
        "msg":"Hi!! I am Rajesh",
        "time":"03:33pm"
    },
    {
        "id":"5",
        "name":"Rajesh",
        "duration":"5 hours",
        "msg":"Hi!! I am Rajesh",
        "time":"03:33pm"
    },
    {
        "id":"6",
        "name":"Rajesh",
        "duration":"5 hours",
        "msg":"Hi!! I am Rajesh",
        "time":"03:33pm"
    },
    {
        "id":"7",
        "name":"Rajesh",
        "duration":"5 hours",
        "msg":"Hi!! I am Rajesh",
        "time":"03:33pm"
    },
    {
        "id":"8",
        "name":"Rajesh",
        "duration":"5 hours",
        "msg":"Hi!! I am Rajesh",
        "time":"03:33pm"
    },
    {
        "id":"9",
        "name":"Rajesh",
        "duration":"5 hours",
        "msg":"Hi!! I am Rajesh",
        "time":"03:40pm"
    },
];

export const { height, width } = Dimensions.get("window");

export default function VendorChat({navigation}){

    const [text, setText] = useState("");
    const [data, setData] = useState(DATA);
   

    return(
        <View style={styles.container}>
            <Header
                title="Chat(02)"
                notify={()=>navigation.navigate("AlertScreen")}
                profile={()=>navigation.navigate("ProfileScreen")}
                bellColor="#000"
            />
            <View style={styles.body}>
                <View style={{}}>
                    <FlatList 
                        data={DATA}
                        keyExtractor={item=>item.id}
                        showsVerticalScrollIndicator={false}
                        style={{marginBottom:80}}
                        renderItem={({item,index})=>(
                            <View key={index} style={styles.mainView}>
                                <View style={styles.subView}>
                                    <View style={{alignItems:"center"}}>
                                        <View style={styles.bgCircle} />
                                        <View style={styles.smCircle}>
                                            <Text style={{color:"#000",fontSize:12}}>1</Text>
                                        </View>
                                    </View>
                                    <View style={styles.texts}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.duration}>{item.duration}</Text>
                                        <Text style={styles.msg}>{item.msg}</Text>
                                        <Text style={styles.msg}>{item.msg}</Text>
                                    </View>
                                    <View style={styles.time}>
                                        <Text style={styles.timetxt}>{item.time}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffe4e1"
    },
    header: {
        marginHorizontal: 20
    },
    textInputDiv: {
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor: "#aaa",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    textInput: {
        height: 40,
        color: "#000",
        paddingLeft: 20,
        width: "85%"
    },
    mainView: {
        borderBottomWidth:1,
    },
    bgCircle: {
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 50/2,
        backgroundColor: "#aaa"
    },
    smCircle: {
        borderWidth: 1,
        height: 20,
        width: 20,
        borderRadius: 20/2,
        backgroundColor: "#aaa",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
    texts: {
        marginLeft: 10,
    },
    time: {
        position: "absolute",
        right: 0,
        top: 3
    },
    body: {
        backgroundColor:"#fff",
        flex:1,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        // bottom:-10
    },
    subView: {
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:20,
        marginVertical:10
    },
    msg: {
        color:"#aaa",
        fontSize:10,
        top:2,
        marginRight:50
    },
    timetxt: {
        color:"#000",
        fontSize:12,
        top:5
    },
    name: {
        color:"#000",
        top:3,
        fontWeight:"500"
    },
    duration: {
        color:"#000",
        fontSize:11,
    }
})