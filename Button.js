import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
export default function But({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.img}>
            <Text> Hello</Text>
        <Image source={require('./assets/Maths.png')} style={styles.Image} />
        <Image source={require('./assets/science.png')} style={styles.Image} />
        <Image source={require('./assets/ict.png')} style={styles.Image} />
        </View>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    margin:20,
    width: 400,
    height: 400,
}
});
