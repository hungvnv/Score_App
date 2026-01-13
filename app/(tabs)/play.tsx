import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function PlayScreen() {
  return (
    <View style={{ flex: 1, padding: 16, gap: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Play & Track Matches
      </Text>

      <Pressable
        onPress={() => router.push("/scoreboard/create_cus")}
        style={{ padding: 16, backgroundColor: "#22c55e", borderRadius: 8 }}
      >
        <Text>Create Scoreboard</Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/tournament/create")}
        style={{ padding: 16, backgroundColor: "#38bdf8", borderRadius: 8 }}
      >
        <Text>Create Tournament</Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/live/enter-code")}
        style={{ padding: 16, backgroundColor: "#facc15", borderRadius: 8 }}
      >
        <Text>Track Live Match</Text>
      </Pressable>
    </View>
  );
}
