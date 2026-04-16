import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Image */}
      <Image
        source={{
          uri: 'https://via.placeholder.com/150',
        }}
        style={styles.image}
      />

      {/* Basic Text */}
            <Text style={styles.name}>RV UNIVERSITY</Text>
      <Text style={styles.name}>Gaurav P Rao</Text>
      <Text style={styles.title}>BCA H Student | 2nd year</Text>

      <Text style={styles.section}>Skills</Text>
      <Text style={styles.text}>• Python</Text>
      <Text style={styles.text}>• React Native</Text>
      <Text style={styles.text}>• HTML & CSS</Text>
      
      <Text style={styles.section}>Hobbies</Text>
      <Text style={styles.text}>• Badminton</Text>
        <Text style={styles.text}>• Travelling</Text>
        <Text style={styles.text}>• Watching Movies</Text>

      <Text style={styles.section}>Contact</Text>
      <Text style={styles.text}>Email: gauravpraobca24@rvu.edu.in</Text>
      <Text style={styles.text}>Phone: 9900336600</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          title="View Projects"
          onPress={() => Alert.alert('Projects', 'Projects section coming soon')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Contact Me"
          color="#28a745"
          onPress={() => Alert.alert('Contact', 'Thanks for reaching out!')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  section: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 15,
  },
});
