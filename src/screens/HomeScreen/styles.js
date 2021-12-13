import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },

  imagePopularGame: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  liveContainer: {
    flex: 2,
  },
  liveGameBanner: {
    height: 200,
  },
});
