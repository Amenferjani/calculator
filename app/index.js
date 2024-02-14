import {View,SafeAreaView ,Text,StyleSheet} from "react-native";
import Screen from "./screen";

export default function Page() {
  
  return (
    <View style={styles.container}>
      <Screen/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
