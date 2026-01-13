import { View, Text, TextInput, Pressable } from "react-native";
import { router } from "expo-router";
import { useAuthStore } from "@/src/store/auth";

export default function LoginScreen() {
  const login = useAuthStore((s) => s.login);
  const guestLogin = useAuthStore((s) => s.guestLogin);

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 24 }}>
        🎱 Billiard Scores
      </Text>

      <TextInput placeholder="Email" style={input} />
      <TextInput placeholder="Password" secureTextEntry style={input} />

      <Pressable
        onPress={() => login("demo-user")}
        style={primaryBtn}
      >
        <Text style={btnText}>Login</Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/(auth)/register")}
        style={linkBtn}
      >
        <Text>Create account</Text>
      </Pressable>

      <Pressable
        onPress={guestLogin}
        style={[primaryBtn, { backgroundColor: "#334155" }]}
      >
        <Text style={btnText}>Continue as Guest</Text>
      </Pressable>
    </View>
  );
}

const input = {
  borderWidth: 1,
  borderRadius: 8,
  padding: 14,
  marginBottom: 12
};

const primaryBtn = {
  padding: 16,
  borderRadius: 10,
  backgroundColor: "#16a34a",
  alignItems: "center",
  marginTop: 12
};

const linkBtn = {
  alignItems: "center",
  marginTop: 12
};

const btnText = {
  color: "white",
  fontWeight: "600"
};
