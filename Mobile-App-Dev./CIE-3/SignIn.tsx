import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

type SignInProps = {
  onSignIn: (role: "Student" | "Faculty") => void;
};

export default function SignIn({ onSignIn }: SignInProps) {
  const [email, setEmail] = useState("student@college.edu");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"Student" | "Faculty">("Student");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Found It</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="student@college.edu"
          placeholderTextColor="#7a897f"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry
          placeholder="Enter your password"
          placeholderTextColor="#7a897f"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Sign Up As</Text>
        <View style={styles.roleRow}>
          <TouchableOpacity
            style={[styles.roleChip, role === "Student" && styles.activeRoleChip]}
            onPress={() => setRole("Student")}
          >
            <Text
              style={[
                styles.roleChipText,
                role === "Student" && styles.activeRoleChipText
              ]}
            >
              Student
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.roleChip, role === "Faculty" && styles.activeRoleChip]}
            onPress={() => setRole("Faculty")}
          >
            <Text
              style={[
                styles.roleChipText,
                role === "Faculty" && styles.activeRoleChipText
              ]}
            >
              Faculty
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => onSignIn(role)}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#174d3c",
    justifyContent: "center",
    paddingHorizontal: 22
  },
  card: {
    backgroundColor: "#f4efe6",
    borderRadius: 24,
    padding: 24
  },
  title: {
    color: "#174d3c",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 6
  },
  subtitle: {
    color: "#55665e",
    fontSize: 16,
    marginBottom: 20
  },
  label: {
    color: "#174d3c",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
    marginTop: 12
  },
  input: {
    backgroundColor: "#dce5df",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    color: "#173428"
  },
  roleRow: {
    flexDirection: "row",
    marginTop: 4
  },
  roleChip: {
    backgroundColor: "#dce5df",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10
  },
  activeRoleChip: {
    backgroundColor: "#24584a"
  },
  roleChipText: {
    color: "#173428",
    fontWeight: "700"
  },
  activeRoleChipText: {
    color: "#f4efe6"
  },
  button: {
    backgroundColor: "#ffa142",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 24
  },
  buttonText: {
    color: "#2f2b26",
    fontSize: 16,
    fontWeight: "800"
  }
});
