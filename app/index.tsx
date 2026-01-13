import { View, Text, Pressable, ImageBackground } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import { useAuthStore } from "@/src/store/auth";
import { LinearGradient } from "expo-linear-gradient";

export default function IndexScreen() {
  const user = useAuthStore((s) => s.user);
  const guestLogin = useAuthStore((s) => s.guestLogin);

  // Nếu đã login → vào thẳng Home
  useEffect(() => {
    if (user) {
      router.replace("/(tabs)");
    }
  }, [user]);

  // Nếu đã login thì không render landing
  if (user) return null;

  return (
    <ImageBackground
      source={require("@/assets/images/billiard-bg.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* Overlay tối */}
      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.85)"]}
        style={{ flex: 1, justifyContent: "space-between", padding: 24 }}
      >
        {/* App title */}
        <View style={{ marginTop: 80 }}>
          <Text
            style={{
              fontSize: 34,
              fontWeight: "bold",
              color: "white"
            }}
          >
            🎱 Billiard Scores
          </Text>

          <Text
            style={{
              marginTop: 12,
              fontSize: 16,
              color: "#e5e7eb",
              lineHeight: 22
            }}
          >
            Track scores. Create tournaments.
            {"\n"}Follow matches in real-time.
          </Text>
        </View>

        {/* Actions */}
        <View style={{ gap: 14 }}>
          {/* Login */}
          <Pressable
            onPress={() => router.push("/(auth)/login")}
            style={{
              paddingVertical: 16,
              borderRadius: 14,
              backgroundColor: "#16a34a",
              alignItems: "center"
            }}
          >
            <Text style={btnText}>Login</Text>
          </Pressable>

          {/* Register */}
          <Pressable
            onPress={() => router.push("/(auth)/register")}
            style={{
              paddingVertical: 16,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: "white",
              alignItems: "center"
            }}
          >
            <Text style={[btnText, { color: "white" }]}>
              Create Account
            </Text>
          </Pressable>

          {/* Guest */}
          <Pressable
            onPress={guestLogin}
            style={{
              paddingVertical: 16,
              borderRadius: 14,
              backgroundColor: "rgba(255,255,255,0.15)",
              alignItems: "center"
            }}
          >
            <Text style={[btnText, { color: "#e5e7eb" }]}>
              Continue as Guest
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const btnText = {
  fontSize: 16,
  fontWeight: "600"
};
