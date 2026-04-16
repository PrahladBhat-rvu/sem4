import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from "react-native";

type ProfileProps = {
  onBack: () => void;
  role: "Student" | "Faculty";
};

export default function Profile({ onBack, role }: ProfileProps) {
  const [claimAlerts, setClaimAlerts] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [compactMode, setCompactMode] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backIcon}>←</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.profileShell}>
          <View style={styles.banner} />

          <View style={styles.heroCard}>
            <View style={styles.avatarWrap}>
              <View style={styles.avatarOuter}>
                <View style={styles.avatarInner}>
                  <View style={styles.avatarHead} />
                  <View style={styles.avatarBody} />
                </View>
              </View>
            </View>

            <View style={styles.heroBody}>
              <Text style={styles.displayName}>Username</Text>
              <Text style={styles.handle}>student@college.edu</Text>
              <Text style={styles.pronouns}>CSE Department • Block A</Text>

              <View style={styles.badgeRow}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{role}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Account Details</Text>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Full Name</Text>
              <Text style={styles.infoValue}>Prahlad Bhat</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoValue}>+91 98765 43210</Text>
            </View>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>User Settings</Text>

            <View style={styles.settingRow}>
              <View style={styles.settingTextWrap}>
                <Text style={styles.settingTitle}>Claim Alerts</Text>
                <Text style={styles.settingHint}>
                  Notify me when someone responds to one of my reports.
                </Text>
              </View>
              <Switch
                value={claimAlerts}
                onValueChange={setClaimAlerts}
                trackColor={{ false: "#5e6472", true: "#7dd1a9" }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.settingRow}>
              <View style={styles.settingTextWrap}>
                <Text style={styles.settingTitle}>Email Updates</Text>
                <Text style={styles.settingHint}>
                  Get important activity summaries in your inbox.
                </Text>
              </View>
              <Switch
                value={emailUpdates}
                onValueChange={setEmailUpdates}
                trackColor={{ false: "#5e6472", true: "#7dd1a9" }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.settingRow}>
              <View style={styles.settingTextWrap}>
                <Text style={styles.settingTitle}>Compact Interface</Text>
                <Text style={styles.settingHint}>
                  Keep menus and profile surfaces tighter and denser.
                </Text>
              </View>
              <Switch
                value={compactMode}
                onValueChange={setCompactMode}
                trackColor={{ false: "#5e6472", true: "#7dd1a9" }}
                thumbColor="#ffffff"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#174d3c"
  },
  content: {
    paddingTop: 10,
    paddingHorizontal: 14,
    paddingBottom: 34
  },
  backButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.14)",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 14
  },
  backIcon: {
    color: "#f4f1eb",
    fontSize: 20,
    fontWeight: "700",
    marginRight: 8
  },
  backText: {
    color: "#f4f1eb",
    fontSize: 15,
    fontWeight: "700"
  },
  profileShell: {
    backgroundColor: "#f4efe6",
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#d8e0da"
  },
  banner: {
    height: 138,
    backgroundColor: "#24584a"
  },
  heroCard: {
    paddingHorizontal: 18,
    paddingBottom: 18,
    marginTop: -38
  },
  avatarWrap: {
    marginBottom: 14
  },
  avatarOuter: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#f4efe6",
    alignItems: "center",
    justifyContent: "center"
  },
  avatarInner: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: "#c8d1d8",
    alignItems: "center",
    justifyContent: "center"
  },
  avatarHead: {
    width: 21,
    height: 21,
    borderRadius: 11,
    backgroundColor: "#f2f3f5",
    marginBottom: 4
  },
  avatarBody: {
    width: 34,
    height: 16,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#f2f3f5"
  },
  heroBody: {
    backgroundColor: "#dce5df",
    borderRadius: 18,
    padding: 16
  },
  displayName: {
    color: "#173428",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 4
  },
  handle: {
    color: "#5d6a63",
    fontSize: 15,
    marginBottom: 4
  },
  pronouns: {
    color: "#6e786f",
    fontSize: 14,
    marginBottom: 14
  },
  badgeRow: {
    flexDirection: "row"
  },
  badge: {
    backgroundColor: "#24584a",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10
  },
  badgeText: {
    color: "#e8f6ef",
    fontWeight: "700"
  },
  panel: {
    backgroundColor: "#dce5df",
    borderRadius: 18,
    marginHorizontal: 18,
    marginBottom: 16,
    padding: 16
  },
  panelTitle: {
    color: "#173428",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 12
  },
  infoRow: {
    paddingVertical: 4
  },
  infoLabel: {
    color: "#6d776f",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 6
  },
  infoValue: {
    color: "#173428",
    fontSize: 16,
    fontWeight: "600"
  },
  divider: {
    height: 1,
    backgroundColor: "#bfd0c6",
    marginVertical: 14
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  settingTextWrap: {
    flex: 1,
    paddingRight: 16
  },
  settingTitle: {
    color: "#173428",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4
  },
  settingHint: {
    color: "#627067",
    fontSize: 13,
    lineHeight: 18
  }
});
