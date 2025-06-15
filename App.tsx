import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#FAF9F6",
    flex: 1,
    marginBottom: 40
  }
})