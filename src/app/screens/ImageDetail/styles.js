import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '@constants/platform';
import { green } from '@constants/colors';

const DELTA = 20;
export const WIDTH = WINDOW_WIDTH - DELTA;
export const HEIGHT = WINDOW_HEIGHT / 2;
export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  image: {
    width: WIDTH,
    height: HEIGHT
  },
  footer: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  shareButton: {
    backgroundColor: green
  }
});
