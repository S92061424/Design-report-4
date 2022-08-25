import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, ScrollView } from 'react-native';

export default function SList() {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrol}>
      <SectionList
     sections={[
      {title: 'Maths Book', data:['Author : sidu','description: Maths Book','Price : 100Rs']},
      {title: 'Science', data:['Author : Raju','description: Science Book','Price : 200Rs']},
    ]}
//author, description, book cover photo,price, 
    renderItem={({item}) => (
    <Text style={styles.item}>{item} </Text>
    )}

    renderSectionHeader={({section}) => (
      <Text style={styles.Sectionheader}>{section.item} </Text>
      )}
     />
     </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
  },
  item:{
    padding: 10,
    fontSize: 10,
    height: 44,
  },
  scrol: {
    backgroundColor: 'yellow',
    marginHorizontal: 20,
   },
});