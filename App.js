//npm install @react-navigation/native
//npm install @react-navigation/stack
//expo install react-native-gesture-handler
//npm install @react-navigation/bottom-tabs
//npm install @react-navigation/drawer
//expo install react-native-gesture-handler react-native-reanimated
//expo install react-native-gesture-handler react-native-reanimated
//npm install react-native-elements --save --force
//npm install react-native-vector-icons --save
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Photo from './Photo';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import But from './Button';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home Page" component={Home} options={{
            title: 'Login',
            headerStyle: {
            backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            }}/>
            
        <Drawer.Screen name="Contact Page" component={Contact} />
         <Drawer.Screen name="Gallery" component={But}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
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

