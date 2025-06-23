import { ScrollView, View, Text } from "react-native";
import Header from "../components/Header";
import Home_Task from "../components/Home_Tasks";
import Home_SubPanal from "../components/Home_SubPanal";

const HomeScreen = () => {
    return(
        <View style={{flex:1}}>
            <Header/>
            {/* <View style>
                {Object.keys(data).map((panal,index)=><Text key={index}>{panal}</Text>)}
            </View> */}
            <Home_SubPanal/>
            {/* <ScrollView>
                {data.map((item,index) => <Home_Task key={index} task={item}/>)}
            </ScrollView> */}
        </View>
    )
}

export default HomeScreen;