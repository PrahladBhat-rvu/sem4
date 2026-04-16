import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function Report() {
  const [object, setObject] = useState("");
  const [location, setLocation] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Report</Text>

        <View style={styles.card}>
          <Text style={styles.label}>OBJECT:</Text>
          <TextInput
            placeholder="what did you find?"
            placeholderTextColor="#aaa"
            value={object}
            onChangeText={setObject}
            style={styles.input}
          />

          <Text style={styles.label}>WHERE DID YOU FIND IT?</Text>
          <TextInput
            placeholder="enter the block you found it in"
            placeholderTextColor="#aaa"
            value={location}
            onChangeText={setLocation}
            style={styles.input}
          />

          <Text style={styles.label}>ADD PIC:</Text>
          <TouchableOpacity style={styles.imageBox}>
            <Text style={styles.helperText}>
              make sure the object is clearly visible
            </Text>

            <View style={styles.cameraBtn}>
              <Text style={styles.cameraIcon}>📷</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f5c45",
    paddingHorizontal: 20
  },
  content: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 130
  },
  title: {
    color: "#f4f1eb",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 22
  },
  card: {
    backgroundColor: "#7f9f94",
    borderRadius: 12,
    padding: 15
  },
  label: {
    marginTop: 15,
    color: "#222",
    fontWeight: "600"
  },
  input: {
    backgroundColor: "#cfd8d3",
    borderRadius: 8,
    padding: 10,
    marginTop: 5
  },
  imageBox: {
    marginTop: 10,
    height: 150,
    backgroundColor: "#b7c5bf",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  helperText: {
    color: "#bbb"
  },
  cameraBtn: {
    marginTop: 10,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 20
  },
  cameraIcon: {
    color: "white"
  }
});
