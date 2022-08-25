import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
export default function Touch() {
    return (
      <View style={styles.container}>
       <Button style={styles.bu}
        title='Go to Submit'   
        />
        <TouchableOpacity>
            <Text style={styles.sy}>Sign in</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
  //onPress={() => this.props.navigation.navigate('Profile')} 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    log:{
        backgroundColor: 'gray',
        width: '100%',
        padding: 20,
        
    },
    bu: {
        padding: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 20,
        width: '100%',
    },
    sy: {
        padding: 15,
        color: 'gray',
    }
  });
  