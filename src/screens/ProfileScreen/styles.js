import {StyleSheet} from 'react-native';

import {COLORS} from './../../themes/styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 15,
    flex: 1.3,
  },
  headerText: {
    fontSize: 30,
  },
  fontBold: {
    fontWeight: '800',
  },
  topAvatar: {
    marginTop: 70,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: COLORS.lightPurple,
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  imageGame: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  Gamelist: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  headerGamelist: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
  },
  gameInfoContent: {
    width: '75%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gameInfo: {
    flexDirection: 'row',
  },
  allGame: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  userGame: {marginLeft: 7, flexDirection: 'row', alignItems: 'baseline'},
  allProGame: {flexDirection: 'row', alignItems: 'baseline'},
  pro: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  proGame: {
    padding: 5,
    backgroundColor: COLORS.lightYellow,
    borderRadius: 3,
  },
  proCode: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: COLORS.lightPurple,
    borderRadius: 3,
  },
  monney: {
    color: COLORS.darkGray,
  },
});
