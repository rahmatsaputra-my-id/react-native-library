import { Colors } from '../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColorModal,
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: Colors.backgroundCardLoading,
    borderRadius: 20,
    padding: 32,
  },
});
