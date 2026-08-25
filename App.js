import { StatusBar } from 'expo-status-bar';
import TodoScreen from './src/constants/screens/TodoScreen';
import { COLORS } from './src/constants/constants/colors';

export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor={COLORS.bg} />
      <todoScreen />
    </>
  );
}
