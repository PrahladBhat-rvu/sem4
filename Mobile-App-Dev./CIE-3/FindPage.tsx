import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function Find() {
  const [object, setObject] = useState("");
  const [place, setPlace] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Find</Text>

        <View>
          <Text style={styles.label}>Object:</Text>
          <TextInput
            placeholder="eg: jacket, keychain, etc."
            placeholderTextColor="#888"
            value={object}
            onChangeText={setObject}
            style={styles.input}
          />

          <Text style={styles.label}>Place: (optional)</Text>
          <TextInput
            placeholder="eg: A block, B block, etc."
            placeholderTextColor="#888"
            value={place}
            onChangeText={setPlace}
            style={styles.input}
          />

          <View style={styles.picRow}>
            <Text style={styles.label}>Add Pic:</Text>

            <TouchableOpacity style={styles.cameraBtn}>
              <Text style={styles.cameraIcon}>📷</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    paddingHorizontal: 20
  },
  content: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 130
  },
  title: {
    color: "#1f5c45",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 4
  },
  label: {
    marginTop: 20,
    color: "#1f5c45",
    fontWeight: "600"
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginTop: 5
  },
  picRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cameraBtn: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 20,
    marginTop: 20
  },
  cameraIcon: {
    color: "white"
  }
});
