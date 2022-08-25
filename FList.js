import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, SectionList } from 'react-native';

export default function Lis() {
  return (
    <View style={styles.container}>
     <FlatList
     data={[
      {key: "Maths"},
      {key: "Science"},
      {key: "Histy"},
      {key: "Geography"},
      {key: "I.C.T"},
      {key: "Art"},
      {key: "Web Devolpment"},
      {key: "Python"},
      {key: "Mobile Application"},
      {key: "Engineerg"},
     ]}

     renderItem={({item}) => <Text style={styles.item}>{item.key} </Text>}
     />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'red',
  },
});
