import { ScrollView, View } from "react-native";
import Header from "../components/Header";
import Home_Task from "../components/Home_Tasks";

const HomeScreen = () => {

    let data = [
        {
            "subject": "Automata",
            "streak": 10,
            "week": 2,
            "month": 20,
            "revision": true,
            "revision_count": 1,
            "added_on": "2025-06-10"
        },
        {
            "subject": "Leetcode",
            "streak": 5,
            "week": 6,
            "month": 10,
            "revision": false,
            "revision_count": 10,
            "added_on": "2025-06-12"
        },
        {
            "subject": "React_native",
            "streak": 3,
            "week": 2,
            "month": 5,
            "revision": true,
            "revision_count": 2,
            "added_on": "2025-06-13"
        },
        {
            "subject": "ML",
            "streak": 4,
            "week": 3,
            "month": 9,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-14"
        },
        {
            "subject": "Research",
            "streak": 2,
            "week": 1,
            "month": 3,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-15"
        },
        {
            "subject": "Research",
            "streak": 2,
            "week": 1,
            "month": 3,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-15"
        },
        {
            "subject": "Research",
            "streak": 2,
            "week": 1,
            "month": 3,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-15"
        },
        {
            "subject": "Research",
            "streak": 2,
            "week": 1,
            "month": 3,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-15"
        },
        {
            "subject": "Research",
            "streak": 2,
            "week": 1,
            "month": 3,
            "revision": false,
            "revision_count": 0,
            "added_on": "2025-06-15"
        }
    ]


    return(
        <View style={{flex:1}}>
            <Header/>
            <ScrollView>
                {data.map((item,index) => <Home_Task key={index} task={item}/>)}
            </ScrollView>
        </View>
    )
}

export default HomeScreen;