import React, {useEffect, useState} from 'react';
import {View, FlatList, Image} from 'react-native';
import {BackgroundView, Text} from '../../components/index';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../themes/styles';
import {getListGame} from '../../api';
import {mapIP} from '../../utils/common';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getRequestListGame} from '../../redux/thunk/gameThunkAction';
import {getListGameSelector} from '../../redux/selectors/gameSelector';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const listGame = useSelector(getListGameSelector);

  useEffect(() => {
    dispatch(getRequestListGame());
  }, []);
  // console.log(listGame);
  return (
    <BackgroundView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.topAvatar}>
          <View style={styles.avatar}></View>
        </View>
        <View style={styles.pro}>
          <View style={styles.proGame}>
            <Text>Progame</Text>
          </View>
          <View style={styles.proCode}>
            <Text>Procode</Text>
          </View>
        </View>
        <View style={styles.allGame}>
          <View style={styles.allProGame}>
            <Text style={{fontSize: 30}}>250</Text>
            <Text>Games</Text>
          </View>
          <View style={styles.userGame}>
            <Text style={{fontSize: 30}}>5</Text>
            <Text>Purchase</Text>
          </View>
        </View>
      </View>

      <View style={styles.Gamelist}>
        <Text style={styles.headerGamelist}>Purchased Games</Text>
        <FlatList
          style={{flexGrow: 0, marginTop: 10, padding: 10}}
          data={listGame}
          ItemSeparatorComponent={() => <View style={{height: 7}} />}
          renderItem={({item}) => (
            <View style={styles.gameInfo}>
              <Image style={styles.imageGame} source={{uri: item.icon}} />
              <View style={styles.gameInfoContent}>
                <Text style={{marginLeft: 10}}>{item.title}</Text>
                <Text style={styles.monney}>
                  {Math.floor(item.rating * 100)} $
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </BackgroundView>
  );
};

export default ProfileScreen;
