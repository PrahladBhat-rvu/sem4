import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

  const [darkMode, setDarkMode] = useState(false); // manual control

  return (
    <SafeAreaView style={[
      styles.safe,
      { backgroundColor: darkMode ? "#000" : "#fff" }
    ]}>

      {/* THEME BUTTON */}
      <TouchableOpacity
        style={[
          styles.toggleBtn,
          { backgroundColor: darkMode ? "#fff" : "#000" }
        ]}
        onPress={() => setDarkMode(!darkMode)}
      >
        <Text style={{
          color: darkMode ? "#000" : "#fff",
          fontWeight: "bold"
        }}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Text>
      </TouchableOpacity>

      {/* TOP CONTAINER */}
      <View style={styles.topContainer}>

        <Text style={[
          styles.titleText,
          { color: darkMode ? "#fff" : "#000" }
        ]}>
          Stories
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >

          {/* Profile Circle */}
          <View style={[
            styles.profileCircle,
            {
              backgroundColor: darkMode ? "#444" : "#ccc",
              borderColor: darkMode ? "#fff" : "#000",
            }
          ]} />

          {/* Story Circles */}
          <View style={styles.circle1} />
          <View style={styles.circle2} />
          <View style={styles.circle3} />
          <View style={styles.circle1} />
          <View style={styles.circle2} />
          <View style={styles.circle3} />
          <View style={styles.circle1} />
          <View style={styles.circle2} />
          <View style={styles.circle3} />

        </ScrollView>
      </View>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  toggleBtn: {
    alignSelf: "flex-end",
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
    marginBottom: 6,
  },

  topContainer: {
    width: "100%",
    paddingTop: 10,
  },

  container: {
    paddingHorizontal: 10,
    gap: 12,
    alignItems: "center",
  },

  profileCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
  },

  circle1: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "red",
  },

  circle2: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "green",
  },

  circle3: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "blue",
  },
});
