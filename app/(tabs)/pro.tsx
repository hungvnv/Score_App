import { View, Text } from "react-native";

export default function ProScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Pro Tournaments & Rankings
      </Text>

      <Text style={{ marginTop: 12 }}>
        World Pool Championship
      </Text>
      <Text>US Open Pool</Text>
    </View>
  );
}
