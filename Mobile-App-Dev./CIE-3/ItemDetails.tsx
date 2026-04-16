import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { type FeedItem } from "../data/items";

type DetailProps = {
  item: FeedItem;
  onBack: () => void;
};

export default function Detail({ item, onBack }: DetailProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <View style={styles.backIconWrap}>
            <Text style={styles.backIcon}>←</Text>
          </View>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Image source={{ uri: item.image }} style={styles.heroImage} />

        <View style={styles.headerRow}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.blockChip}>{item.block}</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Reported</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Found At</Text>
          <Text style={styles.sectionValue}>{item.foundAt}</Text>

          <Text style={styles.sectionLabel}>Reported To</Text>
          <Text style={styles.sectionValue}>{item.reportedBy}</Text>

          <Text style={styles.sectionLabel}>Description</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#174d3c",
    paddingHorizontal: 18
  },
  content: {
    paddingTop: 8,
    paddingBottom: 40
  },
  backButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
    paddingVertical: 6
  },
  backIconWrap: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "rgba(255,255,255,0.14)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.16)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12
  },
  backIcon: {
    color: "#f4f1eb",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 32
  },
  backText: {
    color: "#f4f1eb",
    fontSize: 20,
    fontWeight: "700"
  },
  heroImage: {
    width: "100%",
    height: 280,
    borderRadius: 18,
    marginBottom: 18,
    backgroundColor: "#d9d9d9"
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 18
  },
  title: {
    color: "#f8f3ec",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10
  },
  blockChip: {
    alignSelf: "flex-start",
    backgroundColor: "#7d998c",
    color: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    overflow: "hidden",
    fontSize: 15,
    fontWeight: "600"
  },
  statusBadge: {
    backgroundColor: "#ffa142",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  statusText: {
    color: "#2f2b26",
    fontWeight: "700"
  },
  card: {
    backgroundColor: "#f3efe8",
    borderRadius: 18,
    padding: 18
  },
  sectionLabel: {
    color: "#5f5c56",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 6
  },
  sectionValue: {
    color: "#1d1c1a",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16
  },
  description: {
    color: "#33312d",
    fontSize: 16,
    lineHeight: 24
  }
});
