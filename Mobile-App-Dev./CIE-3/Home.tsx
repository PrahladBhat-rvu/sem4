import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  Bell,
  CircleUserRound,
  HandHelping,
  History,
  LogOut,
} from "lucide-react-native";
import { filters, items, type FeedItem } from "../data/items";

type FeedProps = {
  onOpenItem: (item: FeedItem) => void;
  onOpenProfile: () => void;
  onSignOut: () => void;
};

export default function Feed({
  onOpenItem,
  onOpenProfile,
  onSignOut
}: FeedProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const drawerTranslateX = useRef(new Animated.Value(-320)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.block === activeFilter);

  useEffect(() => {
    if (isProfileOpen) {
      Animated.parallel([
        Animated.timing(drawerTranslateX, {
          toValue: 0,
          duration: 260,
          useNativeDriver: true
        }),
        Animated.timing(backdropOpacity, {
          toValue: 1,
          duration: 240,
          useNativeDriver: true
        })
      ]).start();
    }
  }, [backdropOpacity, drawerTranslateX, isProfileOpen]);

  const closeProfile = (onClosed?: () => void) => {
    Animated.parallel([
      Animated.timing(drawerTranslateX, {
        toValue: -320,
        duration: 240,
        useNativeDriver: true
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: 220,
        useNativeDriver: true
      })
    ]).start(({ finished }) => {
      if (finished) {
        setIsProfileOpen(false);
        onClosed?.();
      }
    });
  };

  const openProfile = () => {
    drawerTranslateX.setValue(-320);
    backdropOpacity.setValue(0);
    setIsProfileOpen(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity
          style={styles.avatar}
          onPress={openProfile}
          activeOpacity={0.85}
        >
          <View style={styles.userHead} />
          <View style={styles.userBody} />
        </TouchableOpacity>

        <View style={styles.headingRow}>
          <Text style={styles.title}>Reported</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chipsRow}
          >
            {filters.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <TouchableOpacity
                  key={filter}
                  onPress={() => setActiveFilter(filter)}
                  style={[styles.chip, isActive && styles.activeChip]}
                  activeOpacity={0.85}
                >
                  <Text
                    style={[
                      styles.chipText,
                      isActive && styles.activeChipText
                    ]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.9}
            onPress={() => onOpenItem(item)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>Tap to view</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No items in {activeFilter}</Text>
            <Text style={styles.emptyText}>
              Tap another block chip to view reported items there.
            </Text>
          </View>
        }
      />

      <Modal
        visible={isProfileOpen}
        transparent
        animationType="none"
        onRequestClose={() => closeProfile()}
      >
        <Animated.View style={[styles.overlayBackdrop, { opacity: backdropOpacity }]}>
          <Pressable
            style={styles.overlayPressLayer}
            onPress={() => closeProfile()}
          >
            <Pressable style={styles.drawerRow} onPress={() => {}}>
              <Animated.View
                style={[
                  styles.profilePanel,
                  { transform: [{ translateX: drawerTranslateX }] }
                ]}
              >
                <TouchableOpacity
                  style={styles.profileHeader}
                  activeOpacity={0.8}
                  onPress={() => closeProfile(onOpenProfile)}
                >
                  <CircleUserRound
                    size={40}
                    color="#f4f1eb"
                    style={styles.profileAvatarIcon}
                  />

                  <View>
                    <Text style={styles.profileName}>Username</Text>
                    <Text style={styles.profileSubtext}>view profile</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
                  <History size={22} color="#f4f1eb" style={styles.menuSvgIcon} />
                  <Text style={styles.menuText}>Claim History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
                  <Bell size={22} color="#f4f1eb" style={styles.menuSvgIcon} />
                  <Text style={styles.menuText}>Updates</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
                  <HandHelping size={22} color="#f4f1eb" style={styles.menuSvgIcon} />
                  <Text style={styles.menuText}>How to use</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.logoutRow}
                  activeOpacity={0.8}
                  onPress={() => {
                    closeProfile(onSignOut);
                  }}
                >
                  <LogOut size={22} color="#e24545" style={styles.menuSvgIcon} />
                  <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
              </Animated.View>

              <Pressable
                style={styles.drawerTint}
                onPress={() => closeProfile()}
              />
            </Pressable>
          </Pressable>
        </Animated.View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#174d3c",
    paddingHorizontal: 16
  },
  topSection: {
    paddingTop: 18
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
    marginBottom: 34
  },
  userHead: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: "#f2f2f2",
    marginBottom: 2
  },
  userBody: {
    width: 20,
    height: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: "#f2f2f2"
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30
  },
  title: {
    color: "#f4f1eb",
    fontSize: 22,
    fontWeight: "700",
    marginRight: 14
  },
  chipsRow: {
    paddingRight: 42,
    paddingLeft: 2
  },
  chip: {
    backgroundColor: "#7d998c",
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginRight: 10
  },
  activeChip: {
    backgroundColor: "#ffa142"
  },
  chipText: {
    color: "#f7f7f7",
    fontSize: 16,
    fontWeight: "600"
  },
  activeChipText: {
    color: "#2f2b26"
  },
  listContent: {
    paddingTop: 2,
    paddingBottom: 140
  },
  gridRow: {
    justifyContent: "space-between",
    marginBottom: 16
  },
  card: {
    width: "48%",
    backgroundColor: "#235847",
    borderRadius: 14,
    padding: 5,
    shadowColor: "#000",
    shadowOpacity: 0.22,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6
  },
  image: {
    width: "100%",
    height: 154,
    borderRadius: 10,
    backgroundColor: "#d6d6d6"
  },
  overlay: {
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 10,
    backgroundColor: "rgba(0,0,0,0.42)",
    borderRadius: 5,
    paddingVertical: 7
  },
  overlayText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500"
  },
  emptyState: {
    marginTop: 60,
    alignItems: "center",
    paddingHorizontal: 24
  },
  emptyTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8
  },
  emptyText: {
    color: "rgba(255,255,255,0.8)",
    textAlign: "center",
    lineHeight: 20
  },
  overlayBackdrop: {
    flex: 1,
    backgroundColor: "rgba(1,8,6,0.56)"
  },
  overlayPressLayer: {
    flex: 1
  },
  drawerRow: {
    flex: 1,
    flexDirection: "row"
  },
  profilePanel: {
    width: "72%",
    backgroundColor: "rgba(2,10,7,0.92)",
    paddingTop: 82,
    paddingHorizontal: 26,
    paddingBottom: 32
  },
  drawerTint: {
    flex: 1,
    backgroundColor: "rgba(68,140,112,0.42)"
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40
  },
  profileAvatarIcon: {
    marginRight: 16
  },
  profileName: {
    color: "#f8f3ec",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 2
  },
  profileSubtext: {
    color: "rgba(248,243,236,0.72)",
    fontSize: 14
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30
  },
  menuSvgIcon: {
    width: 28,
    marginRight: 14
  },
  menuText: {
    color: "#f5f0e8",
    fontSize: 18,
    fontWeight: "700"
  },
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 110
  },
  logoutText: {
    color: "#e24545",
    fontSize: 18,
    fontWeight: "700"
  }
});
