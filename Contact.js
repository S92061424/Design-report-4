import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Photo from './Photo';
import Header from './Header';
import Lis from './FList';
import SList from './SList';
import But from './Button';
import SearchBar from './Search';
export default function Contact({navigation}) {
  return (
    <View style={styles.container}>
   <View><Lis/></View>   
   <SearchBar/>
   <View>
   <SList/>
   </View>
   
      <Button title='Go to Home' onPress={() => navigation.navigate('Home Page')}>
          
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