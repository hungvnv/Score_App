import { PrimaryButton } from '@/src/components/PrimaryButton';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotReady() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚧 Feature Not Ready</Text>

      <Text style={styles.message}>
        Tính năng này hiện chưa được phát triển.
        {'\n'}
        Vui lòng quay lại sau.
      </Text>

      <PrimaryButton
        title="Back to Home"
        onPress={() => router.replace('/home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
    lineHeight: 22,
  },
});
