import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#222",
        tabBarInactiveBackgroundColor: "#222",
        tabBarActiveTintColor: "#f36",
        tabBarInactiveTintColor: "#eee",
        tabBarStyle: {
          height: 54,
          borderTopWidth: 0.3,
          borderColor: "#555",
          paddingBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          // Passing color is necessary to change between active/inactive color from screenOptions
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={34}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          // Passing color is necessary to change between active/inactive color from screenOptions
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-marker-outline"
              color={color}
              size={34}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          // Passing color is necessary to change between active/inactive color from screenOptions
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={34}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 34,
    marginTop: 10,
  },
});
