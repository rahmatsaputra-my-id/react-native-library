import { View, StyleSheet } from 'react-native';
import { StarRating } from 'react-native-library';

export default function App() {
  return (
    <View style={styles.container}>
      <StarRating rating={4} onRate={(val) => console.log(val)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
