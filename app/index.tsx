import { PrimaryButton } from '@/src/components/PrimaryButton';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Billiard Scores</Text>
      <Text style={styles.subtitle}>
        Quick scoring for billiard matches
      </Text>

      <PrimaryButton
        title="Continue as Guest"
        onPress={() => router.replace('/home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.6,
    marginBottom: 32,
    textAlign: 'center',
  },
});
