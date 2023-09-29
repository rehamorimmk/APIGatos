import { StyleSheet, View, Text } from 'react-native';
import { VerCat } from './verCat';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>API de Gatos</Text>
      <VerCat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
