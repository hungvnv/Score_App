import { PrimaryButton } from '@/src/components/PrimaryButton';
import { router } from 'expo-router';
import { View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <PrimaryButton
        title="Create & Track Matches"
        onPress={() => router.push('/scoreboard')}
      />

      <PrimaryButton
        title="Pro Tournaments & Rankings"
        onPress={() => router.push('/not-ready')}
      />
    </View>
  );
}
