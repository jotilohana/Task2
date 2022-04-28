import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
const baseUrl = 'http://localhost:8080/shifts';
import action from '../common/api';

import {Today, Tommorrow, May} from './List';

const Shifts = () => {
  // const customStyles = setCustom(true);
  // React.useEffect(() => {
  //   action
  //     .get(`/shifts`)
  //     .then(response => {
  //       console.log(response);
  //       // console.log(response);
  //     })
  //     .then(err => {
  //       // console.log(err);
  //     });
  // }, []);
  const List = ({color, item, textColor}) => {
    // console.log(item);
    return (
      <View style={styles.ListMainView}>
        <View>
          <Text style={styles.time}>
            {item.from} - {item.To}
          </Text>
          <Text>{item.city}</Text>
        </View>
        <TouchableOpacity style={[styles.cancelBtn, color]}>
          <Text style={textColor}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}) => (
    <List
      item={item}
      from={item.from}
      color={styles.customCancelBtn}
      textColor={styles.btnText}
    />
  );
  return (
    <View style={styles.MainView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Today</Text>
        <Text style={styles.headerShift}>2 Shifts, 4 hr</Text>
      </View>
      <FlatList
        style={{
          flexGrow: 0,
        }}
        data={Today}
        renderItem={List}
        keyExtractor={item => item.id}
      />
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Tommorrow</Text>
        <Text style={styles.headerShift}>2 Shifts, 4 hr</Text>
      </View>
      <FlatList
        style={{
          flexGrow: 0,
        }}
        data={Tommorrow}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.headerView}>
        <Text style={styles.headerText}>September 22</Text>
        <Text style={styles.headerShift}>2 Shifts, 3 hr</Text>
      </View>
      <FlatList
        style={{
          flexGrow: 0,
        }}
        data={May}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: 'white',
    // padding:10
  },
  headerView: {
    padding: 10,
    paddingLeft: 30,
    flexDirection: 'row',
    borderBottomColor: '#CBD2E1',
    borderBottomWidth: 1,
    backgroundColor: '#F7F8FB',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 30,
    color: '#4F6C92',
  },
  headerShift: {
    marginTop: 5,
  },

  //List
  ListMainView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomColor: '#CBD2E1',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  cancelBtn: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    width: 80,
    alignItems: 'center',
  },
  time: {
    // fontWeight: 'bold',
    fontSize: 18,
    color: '#4F6C92',
  },

  customCancelBtn: {
    borderColor: '#E2006A',
  },
  btnText: {
    color: '#E2006A',
  },
});
export default Shifts;
