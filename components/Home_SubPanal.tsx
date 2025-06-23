import { useEffect, useRef, useState } from "react";
import { View,Text, StyleSheet, FlatList, Animated, Dimensions, Image, ScrollView, SafeAreaView, NativeSyntheticEvent, NativeScrollEvent, Pressable } from "react-native";
import Home_Task from "./Home_Tasks";
import Task_View from "./Task_View";

type Task = {
    id:string
    subject: string;
    streak: number;
    week: number;
    month: number;
    revision: boolean;
    revision_count: number;
    added_on: string;
}

const { width } = Dimensions.get('window');

const Home_SubPanal = () => {
    const [screenNumber,setScreenNumber] = useState(0);

    let DATA: Record<string, Task[]> = {
        "completed":[{
            "id":"0",
            "subject": "ML",
            "streak": 4,
            "week": 3,
            "month": 9,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-14"
        },{
            "id":"1",
            "subject": "Research",
            "streak": 2,
            "week": 1,
            "month": 3,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-15"
        },{
            "id":"2",
            "subject": "Automata",
            "streak": 10,
            "week": 2,
            "month": 20,
            "revision": true,
            "revision_count": 1,
            "added_on": "2025-06-10"
        },],
        "ongoing":[{
            "id":"3",
            "subject": "Research",
            "streak": 2,
            "week": 1,
            "month": 3,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-15"
        },{
            "id":"4",
            "subject": "Research",
            "streak": 2,
            "week": 1,
            "month": 3,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-15"
        },{
            "id":"5",
            "subject": "Research",
            "streak": 2,
            "week": 1,
            "month": 3,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-15"
        },{
            "id":"6",
            "subject": "Research",
            "streak": 2,
            "week": 1,
            "month": 3,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-15"
        },{
            "id":"7",
            "subject": "React_native",
            "streak": 3,
            "week": 2,
            "month": 5,
            "revision": true,
            "revision_count": 2,
            "added_on": "2025-06-13"
        },{
            "id":"8",
            "subject": "Leetcode",
            "streak": 5,
            "week": 6,
            "month": 10,
            "revision": false,
            "revision_count": 10,
            "added_on": "2025-06-12"
        },{
            "id":"9",
            "subject": "Leetcode",
            "streak": 5,
            "week": 6,
            "month": 10,
            "revision": false,
            "revision_count": 10,
            "added_on": "2025-06-12"
        },],
        "daily":[{
            "id":"9",
            "subject": "Leetcode",
            "streak": 5,
            "week": 6,
            "month": 10,
            "revision": false,
            "revision_count": 10,
            "added_on": "2025-06-12"
        },
        ]
    }

    const screenWidth = Dimensions.get('window').width;

    const OnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const xOffset = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(xOffset / screenWidth);
        setScreenNumber(currentIndex);
    }

    return(
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.panal_title}>
                {
                    Object.keys(DATA).map(
                        (item,index) => (
                            <View key={index+10} style={[styles.panal_title_text_view,
                                { backgroundColor: index === screenNumber ? '#FAF9F6' : 'gray', borderBottomColor: index === screenNumber ? "#FAF9F6" : "black", borderBottomWidth: 1}
                            ]}>
                                <Text key={index} style={styles.panal_title_text}>{item}</Text>
                            </View>
                        )
                    )
                }
                <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"black"}}>
                    <Image style={{width:40,aspectRatio:1,height:39}} source={require("../assets/add_button.png")}/>
                </View>
        </View>
        <View style={{ flex: 1 }}>
            <FlatList
            data={Object.keys(DATA)}
            keyExtractor={(item) => item}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => OnScroll(event)}
            renderItem={({ item }) => (
                <Pressable onPress={Task_View}>
                <View style={{ width: screenWidth, flex: 0.8}}>
                <FlatList
                    data={DATA[item]}
                    keyExtractor={(subItem) => subItem.id}
                    renderItem={({ item: task }) => <Home_Task task={task} />}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={{ paddingBottom: 40 }}
                />
                </View>
                </Pressable>
            )}
            />
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    "panal_title":{
        flexDirection:"row",
        width:"100%",
    },
    "panal_title_text_view":{
        width: 100,
        alignItems: "center",
        height: 40,
        justifyContent: "center",
        borderRightColor: "black",
        borderRightWidth: 1
    },
    "panal_title_text":{
        
    },
    "panal_text":{
        width: 100,
        height: 43,
        textAlign: "center",
        borderRightWidth: 1,
        borderRightColor: "black",
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },
    "end_panal":{
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: width
    },
    "end_panal_image":{
        height: 42.5,
        aspectRatio: 1
    },
    "panal_text_view":{
        flexDirection: "row",
        alignItems: "center",
    }
})

export default Home_SubPanal;