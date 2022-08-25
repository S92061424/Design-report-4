import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Photo from './Photo';
import Header from './Header';
import Login from './Login';
import Touch from './Touch';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
     
      <Photo/>
      <Header/>
        <Login/>
      <Touch/>
      <Button title='Go to Contact' onPress={() => navigation.navigate('Contact Page')}>
          
      </Button>
      
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
});