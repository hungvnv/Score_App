/* ================= app/home.tsx ================= */
import { PrimaryButton } from '@/src/components/PrimaryButton';
import { router } from 'expo-router';
import { Alert, View } from 'react-native';


export default function Home() {
const notReady = () => Alert.alert('Thông báo', 'Chưa sẵn sàng, tính năng đang phát triển');


return (
<View style={{ flex: 1, padding: 20 }}>
<PrimaryButton title="Create & Track Matches" onPress={() => router.push('/scoreboard')} />
<PrimaryButton title="Pro Tournaments & Rankings" onPress={notReady} />
</View>
);
}