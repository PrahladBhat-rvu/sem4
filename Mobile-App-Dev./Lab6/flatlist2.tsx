import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

import studentsData from './data1.json';

/* Student type */
type Student = {
  id: string;
  name: string;
  grade: string;
  section: string;
};
const students: Student[] = studentsData;


/* Card component */
const StudentCard = ({ student }: { student: Student }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{student.name}</Text>

      <Text style={styles.text}>Grade: {student.grade}</Text>
      <Text style={styles.text}>Section: {student.section}</Text>
      <Text style={styles.text}>ID: {student.id}</Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Student Directory</Text>

      <FlatList
        data={students as Student[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StudentCard student={item} />}
      />
    </SafeAreaView>
  );
};

export default App;

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    marginTop: 4,
  },
});
