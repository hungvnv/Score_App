import { View, Text, TextInput, Pressable } from "react-native";
import { router } from "expo-router";

export default function RegisterScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 24 }}>
        Create Account
      </Text>

      <TextInput placeholder="Email" style={input} />
      <TextInput placeholder="Password" secureTextEntry style={input} />

      <Pressable
        onPress={() => router.replace("/(auth)/login")}
        style={primaryBtn}
      >
        <Text style={btnText}>Register</Text>
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
  alignItems: "center"
};

const btnText = {
  color: "white",
  fontWeight: "600"
};
