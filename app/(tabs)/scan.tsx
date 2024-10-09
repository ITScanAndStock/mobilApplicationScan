import TitleCustome from '@/components/TitleCustome';
import { Text, View, StyleSheet } from 'react-native';

const Scan = () => {
  return (
    <View style={styles.container}>
      <TitleCustome title="SCAN RAPIDE" />
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
});
