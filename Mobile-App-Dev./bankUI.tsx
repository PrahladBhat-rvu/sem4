import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function TransferScreen() {
  return (
    <SafeAreaView style={styles.safe}>

      {/* Purple Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Transfer Bank</Text>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.cardContainer}>

          {/* TRANSFER BANK */}
          <Text style={styles.section}>Transfer Bank</Text>

          {/* BCA */}
          <TouchableOpacity style={styles.row}>
            <Image
              source={{
                uri: "https://png.pngtree.com/png-vector/20221121/ourmid/pngtree-bca-bank-logo-png-image_6472275.png",
              }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.name}>BCA</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          {/* BNI */}
          <TouchableOpacity style={styles.row}>
            <Image
              source={{
                uri: "https://www.shutterstock.com/image-vector/bank-bnilogo-design-banner-bni-600nw-2345176265.jpg",
              }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.name}>BNI</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          {/* Mandiri (PNG instead of SVG) */}
          <TouchableOpacity style={styles.row}>
            <Image
              source={{
                uri: "https://logowik.com/content/uploads/images/bank-mandiri.jpg",
              }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.name}>Mandiri</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          {/* VIRTUAL ACCOUNT */}
<Text style={styles.section}>Virtual Account</Text>

{/* OVO */}
<TouchableOpacity style={styles.row}>
  <Image
    source={{
      uri: "https://static.vecteezy.com/system/resources/thumbnails/067/065/651/small_2x/ovo-logo-square-rounded-ovo-logo-free-download-ovo-logo-free-png.png",
    }}
    style={styles.logo}
    resizeMode="contain"
  />
  <Text style={styles.name}>OVO</Text>
  <Text style={styles.arrow}>›</Text>
</TouchableOpacity>

{/* GoPay */}
<TouchableOpacity style={styles.row}>
  <Image
    source={{
      uri: "https://i.pinimg.com/originals/02/8b/92/028b92bb43a9f6c80e26c3ea403cb698.png",
    }}
    style={styles.logo}
    resizeMode="contain"
  />
  <Text style={styles.name}>GoPay</Text>
  <Text style={styles.arrow}>›</Text>
</TouchableOpacity>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#6a1b9a",
  },

  header: {
    padding: 15,
  },

  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },

  cardContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    minHeight: "100%",
  },

  section: {
    fontWeight: "bold",
    marginVertical: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
  },

  logo: {
    width: 50,
    height: 35,
    marginRight: 10,
  },

  name: {
    flex: 1,
    fontSize: 15,
  },

  arrow: {
    fontSize: 22,
    color: "#6a1b9a",
  },
});
