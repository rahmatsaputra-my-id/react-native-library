import { Colors } from '../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  star: {
    marginHorizontal: 4,
    resizeMode: 'contain',
    tintColor: Colors.golden,
  },
});
