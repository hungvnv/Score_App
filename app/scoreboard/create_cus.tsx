import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Player = {
  id: string;
  name: string;
  score: number;
};

const colors = {
  tableGreen: "#0f3d2e",
  darkGreen: "#0a2e23",
  wood: "#3a2a1a",
  scoreWhite: "#f8fafc",
  plus: "#22c55e",
  minus: "#ef4444"
};

export default function ScoreboardCreateScreen() {
  const [players, setPlayers] = useState<Player[]>([
    { id: "1", name: "Play1", score: 0 },
    { id: "2", name: "Play2", score: 0 }
  ]);

  const updateScore = (id: string, delta: number) => {
    setPlayers((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, score: p.score + delta } : p
      )
    );
  };

  const updateName = (id: string, name: string) => {
    setPlayers((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, name } : p
      )
    );
  };

  const addPlayer = () => {
    setPlayers((prev) => [
      ...prev,
      { id: Date.now().toString(), name: `Player ${prev.length + 1}`, score: 0 }
    ]);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.tableGreen,
        padding: 16
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>

        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "white",
            marginLeft: 12
          }}
        >
          🎱 Scoreboard
        </Text>
      </View>

      {/* Player rows */}
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: colors.darkGreen,
              padding: 14,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: colors.wood
            }}
          >
            {/* Name */}
            <TextInput
              value={item.name}
              onChangeText={(text) => updateName(item.id, text)}
              style={{
                flex: 1,
                color: "white",
                fontSize: 16,
                fontWeight: "600"
              }}
            />

            {/* Minus */}
            <Pressable
              onPress={() => updateScore(item.id, -1)}
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: colors.minus,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 8
              }}
            >
              <Text style={{ color: "white", fontSize: 24 }}>−</Text>
            </Pressable>

            {/* Score */}
            <Text
              style={{
                width: 56,
                textAlign: "center",
                color: colors.scoreWhite,
                fontSize: 28,
                fontWeight: "bold"
              }}
            >
              {item.score}
            </Text>

            {/* Plus */}
            <Pressable
              onPress={() => updateScore(item.id, 1)}
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: colors.plus,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 8
              }}
            >
              <Text style={{ color: "white", fontSize: 24 }}>+</Text>
            </Pressable>
          </View>
        )}
      />

      {/* Bottom actions */}
      <View style={{ marginTop: 24, gap: 12 }}>
        <Pressable
          onPress={addPlayer}
          style={{
            padding: 16,
            backgroundColor: "#14532d",
            borderRadius: 12,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            + Add Player
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.back()}
          style={{
            padding: 16,
            backgroundColor: "#020617",
            borderRadius: 12,
            alignItems: "center",
            borderWidth: 1,
            borderColor: colors.wood
          }}
        >
          <Text style={{ color: "white" }}>End Match</Text>
        </Pressable>
      </View>
    </View>
  );
}
