import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { useAuthStore } from "@/src/store/auth";

export default function HomeScreen() {
  const logout = useAuthStore((s) => s.logout);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>🎱 Play & Track Matches</Text>

      <Pressable
        onPress={logout}
        style={{ marginTop: 20, padding: 12 }}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
