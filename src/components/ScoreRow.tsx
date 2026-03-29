import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Player = {
  id: string;
  name: string;
  score: number;
};

type ScoreRowProps = {
  player: Player;
  onChange: (delta: number) => void;
  onDelete: () => void;
  onLongPress?: () => void;
  isLeader?: boolean;
  active?: boolean;
};

export function ScoreRow({
  player,
  onChange,
  onDelete,
  onLongPress,
  isLeader = false,
  active = false,
}: ScoreRowProps) {
  return (
    <View
      style={[
        styles.row,
        isLeader && styles.leader,
        active && styles.active,
      ]}
      onTouchStart={onLongPress}
    >
      {/* ❌ Delete – ở đầu player */}
      <TouchableOpacity onPress={onDelete} style={styles.delete}>
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>

      {/* Player name */}
      <Text style={styles.name}>{player.name}</Text>

      {/* Score controls */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => onChange(-1)}>
          <Text style={styles.controlText}>➖</Text>
        </TouchableOpacity>

        <Text style={styles.score}>{player.score}</Text>

        <TouchableOpacity onPress={() => onChange(1)}>
          <Text style={styles.controlText}>➕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: '#f7f7f7',
  },
  leader: {
    backgroundColor: '#e6fff5',
    borderWidth: 1,
    borderColor: '#0a7',
  },
  active: {
    opacity: 0.6,
  },
  delete: {
    marginRight: 10,
  },
  deleteText: {
    fontSize: 18,
    color: '#d00',
    fontWeight: 'bold',
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlText: {
    fontSize: 20,
    marginHorizontal: 6, // ✅ FIX Ở ĐÂY
  },
  score: {
    width: 36,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
