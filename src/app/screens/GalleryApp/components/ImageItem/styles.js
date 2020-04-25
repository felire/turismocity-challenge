import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from '@constants/platform';

const DELTA = 10;
const SIZE = WINDOW_WIDTH / 2 - DELTA;
export default StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    marginTop: 10,
    marginHorizontal: DELTA / 4
  },
  image: {
    width: SIZE,
    height: SIZE
  }
});
