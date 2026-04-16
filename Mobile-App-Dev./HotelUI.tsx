import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const hotels = [
  {
    id: "1",
    name: "Hotel Satu",
    price: "Rp 1.000.000",
    logo: "https://cdn-icons-png.flaticon.com/512/139/139899.png",
  },
  {
    id: "2",
    name: "Hotel Dua",
    price: "Rp 1.000.000",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
  },
  {
    id: "3",
    name: "Hotel Tiga",
    price: "Rp 1.000.000",
    logo: "https://cdn-icons-png.flaticon.com/512/235/235889.png",
  },
  {
    id: "4",
    name: "Hotel Empat",
    price: "Rp 1.000.000",
    logo: "https://cdn-icons-png.flaticon.com/512/139/139873.png",
  },
];

export default function App() {
  const renderItem = ({ item }: { item: typeof hotels[0] }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.logo }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
      </View>

      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pilihan Hotel</Text>
      <FlatList data={hotels} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eee", padding: 10 },

  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    resizeMode: "contain",
    backgroundColor: "#fff",
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  name: { fontWeight: "bold" },

  stars: { color: "orange" },

  price: {
    color: "purple",
    fontWeight: "bold",
  },
});
