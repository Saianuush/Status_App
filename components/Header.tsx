import { useState } from "react";
import { View,Text,StyleSheet } from "react-native";

const Header = () => {
  const [date, setDate] = useState(new Date());
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const todayDate = () => {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${days[date.getDay()]}`;
  };

  return (
    <View style={styles.header}>
      <View style={styles.content}>
        <Text style={styles.title}>Todo</Text>
        <Text style={styles.title2}>{todayDate()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FAF9F6",
    width: "100%",
    paddingTop: 50,
    paddingBottom: 30,
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  content: {
    paddingLeft: 30,
  },
  title: {
    fontSize: 40,
    fontFamily: "Poppins_400Regular",
    marginBottom: 4
  },
  title2: {
    fontSize: 16,
    color: "#333"
  }
});

export default Header;