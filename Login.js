import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Login() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='username' style={styles.log} />
        <TextInput placeholder='Password' style={styles.log} />
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
    log:{
        backgroundColor: 'skyblue',
        width: '100%',
        padding: 20,
        marginTop: 10,

    }
  });
  