import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Player = {
  id: string;
  name: string;
};

type Match = {
  id: string;
  playerA: Player;
  playerB: Player;
};

const colors = {
  tableGreen: "#0f3d2e",
  darkGreen: "#0a2e23",
  wood: "#3a2a1a"
};

export default function CreateTournamentScreen() {
  const [tournamentName, setTournamentName] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);

  const addPlayer = () => {
    setPlayers((prev) => [
      ...prev,
      { id: Date.now().toString(), name: `Player ${prev.length + 1}` }
    ]);
  };

  const updatePlayerName = (id: string, name: string) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, name } : p))
    );
  };

  const generateMatches = () => {
    const result: Match[] = [];
    for (let i = 0; i < players.length - 1; i += 2) {
      result.push({
        id: `${i}`,
        playerA: players[i],
        playerB: players[i + 1]
      });
    }
    setMatches(result);
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
          🏆 Create Tournament
        </Text>
      </View>

      {/* Tournament name */}
      <TextInput
        placeholder="Tournament name"
        placeholderTextColor="#94a3b8"
        value={tournamentName}
        onChangeText={setTournamentName}
        style={{
          marginTop: 20,
          backgroundColor: colors.darkGreen,
          color: "white",
          padding: 14,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: colors.wood
        }}
      />

      {/* Players */}
      <FlatList
        style={{ marginTop: 20 }}
        data={players}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: colors.darkGreen,
              padding: 12,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.wood
            }}
          >
            <TextInput
              value={item.name}
              onChangeText={(text) => updatePlayerName(item.id, text)}
              style={{ color: "white", fontSize: 16 }}
            />
          </View>
        )}
      />

      {/* Actions */}
      <View style={{ marginTop: 20, gap: 12 }}>
        <Pressable
          onPress={addPlayer}
          style={{
            padding: 14,
            backgroundColor: "#14532d",
            borderRadius: 10,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white" }}>+ Add Player</Text>
        </Pressable>

        <Pressable
          disabled={players.length < 2}
          onPress={generateMatches}
          style={{
            padding: 14,
            backgroundColor: players.length < 2 ? "#334155" : "#16a34a",
            borderRadius: 10,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white" }}>Generate Matches</Text>
        </Pressable>
      </View>

      {/* Match list */}
      {matches.length > 0 && (
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 12
            }}
          >
            Round 1
          </Text>

          {matches.map((m) => (
            <Pressable
              key={m.id}
              onPress={() =>
                router.push("/scoreboard/create")
              }
              style={{
                padding: 14,
                backgroundColor: colors.darkGreen,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: colors.wood,
                marginBottom: 10
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                {m.playerA.name}  vs  {m.playerB.name}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}
