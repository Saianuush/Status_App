import { Text, View, StyleSheet, ListRenderItemInfo } from "react-native";

type TaskProp = {
  task: {
    id: string;
    subject: string;
    streak: number;
    week: number;
    month: number;
    revision: boolean;
    revision_count: number;
    added_on: string;
  };
};

const Home_Task = ({task}: TaskProp) => {

    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{task.subject}</Text>
                <Text style={styles.doneButton}>Done</Text>
            </View>
            <View style={styles.streak}>
                <View style={styles.streakTextBox}>
                    <Text style={styles.streakText}>Streak</Text>
                    <Text style={styles.streakText}>{task.streak} 🔥🔥</Text>
                </View>
                <View style={styles.streakTextBox}>
                    <Text style={styles.streakText}>Weekly</Text>
                    <Text style={styles.streakText}>{task.week} 🔥</Text>
                </View>
                <View style={styles.streakTextBox}>
                    <Text style={styles.streakText}>Monthly</Text>
                    <Text style={styles.streakText}>{task.month} 📅</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    "container":{
        backgroundColor:"#F0EAD6",
        marginVertical: 10,
        marginHorizontal: 25,
        borderRadius: 10,
        elevation: 8
    },
    "title":{
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    "doneButton":{
        backgroundColor: "#ECFFDC",
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderColor: "#008000",
        borderWidth: 0.5,
        borderRadius: 20,
        color: "#008000"
    },
    "titleText":{
        fontSize: 20
    },
    "streak":{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius:5,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
    },
    "streakTextBox":{
        width:90,
        borderRadius:5,
        padding:2,
        backgroundColor: "#FFFFF0",
        flexDirection: "row",
        justifyContent: "center",
        gap:10
    },
    "streakText":{
        fontSize: 10,
        fontFamily: "Poppins_400Regular"
    }
})

export default Home_Task;