/* ================= app/scoreboard.tsx ================= */
import { PrimaryButton } from '@/src/components/PrimaryButton';
import { ScoreRow } from '@/src/components/ScoreRow';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import DraggableFlatList, {
    RenderItemParams,
} from 'react-native-draggable-flatlist';

export default function Scoreboard() {
  const [players, setPlayers] = useState([
    { id: '1', name: 'Player 1', score: 0 },
    { id: '2', name: 'Player 2', score: 0 },
  ]);

  const [newPlayer, setNewPlayer] = useState('');

  const leaderScore = Math.max(...players.map(p => p.score));

  const updateScore = (id: string, delta: number) => {
    setPlayers(players.map(p => (p.id === id ? { ...p, score: p.score + delta } : p)));
  };

  const addPlayer = () => {
    if (!newPlayer.trim()) return;
    setPlayers([
      ...players,
      { id: Date.now().toString(), name: newPlayer.trim(), score: 0 },
    ]);
    setNewPlayer('');
  };

  const removePlayer = (id: string) => {
    setPlayers(players.filter(p => p.id !== id));
  };

  const endMatch = () => {
    Alert.alert(
      'Kết thúc trận đấu',
      'Trận đấu đã kết thúc',
      [{ text: 'OK', onPress: () => router.replace('/home') }],
      { cancelable: false }
    );
  };

  const renderItem = ({ item, drag, isActive }: RenderItemParams<any>) => (
    <ScoreRow
      player={item}
      onChange={(d) => updateScore(item.id, d)}
      onDelete={() => removePlayer(item.id)}
      isLeader={item.score === leaderScore && leaderScore !== 0}
      onLongPress={drag}
      active={isActive}
    />
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Scoreboard</Text>

        <DraggableFlatList
          data={players}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          onDragEnd={({ data }) => setPlayers(data)}
          contentContainerStyle={{ paddingBottom: 160 }}
        />

        <View style={styles.bottomBar}>
          <TextInput
            placeholder="New player name"
            value={newPlayer}
            onChangeText={setNewPlayer}
            style={styles.input}
          />
          <PrimaryButton title="Add Player" onPress={addPlayer} />
          <PrimaryButton title="End Match" onPress={endMatch} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
});