import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Today, Tommorrow, May} from './List';

const Available = () => {
  const [helT, setHelT] = useState([]);
  const [helTom, setHelTom] = useState([]);
  const [helM, setHelM] = useState([]);
  const [temT, setTemT] = useState([]);
  const [temTom, setTemtom] = useState([]);
  const [temM, setTemM] = useState([]);
  const [ValT, setValT] = useState(helT);
  const [ValTom, setValTom] = useState(helTom);
  const [ValM, setValTM] = useState(helM);
  const [textH, setTextH] = useState(true);
  const [textT, setTextT] = useState(false);
  async function fetchImages() {
    Today.map((val, i) => {
      if (val.city === 'Helsinki') {
        // setHelT(helT => [...helT, val]);
        setHelT(val);
      } else if (val.city === 'Tempere') {
        setTemT(val);
      }
    });
    Tommorrow.map((val, i) => {
      if (val.city === 'Helsinki') {
        setHelTom(helTom => [...helTom, val]);
      } else if (val.city == 'Tempere') {
        setTemtom(val);
      }
    }, []);
    May.map((val, i) => {
      if (val.city === 'Helsinki') {
        setHelM(helM => [...helM, val]);
      } else if (val.city == 'Tempere') {
        setTemM(val);
      }
    });
  }
  const setVal = () => {
    return (
      setValT(helT),
      setValTom(helTom),
      setValTM(helM),
      setTextT(false),
      setTextH(true)
    );
  };
  const setSecVal = () => {
    return (
      setValT(temT),
      setValTom(temTom),
      setValTM(temM),
      setTextH(false),
      setTextT(true)
    );
  };

  useEffect(() => {
    fetchImages();
    setVal();
  }, []);

  const List = ({color, item, textColor}) => {
    return (
      <View style={styles.ListMainView}>
        <View>
          <Text style={styles.time}>
            {item.from} - {item.To}
          </Text>
          <Text>{item.city}</Text>
        </View>
        <TouchableOpacity style={[styles.cancelBtn, color]}>
          <Text style={textColor}>Booked</Text>
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
  const Data = () => {
    console.log(ValT);
    return (
      <View>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Today</Text>
        </View>
        <FlatList
          style={{
            flexGrow: 0,
          }}
          data={ValT}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Tommorrow</Text>
        </View>
        <FlatList
          style={{
            flexGrow: 0,
          }}
          data={ValTom}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.headerView}>
          <Text style={styles.headerText}>September 22</Text>
        </View>
        <FlatList
          style={{
            flexGrow: 0,
          }}
          data={ValM}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={setVal}>
            <Text
              style={
                textH
                  ? [styles.headerText, {color: '#004FB4'}]
                  : styles.headerText
              }>
              Helsinki
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={setSecVal}>
            <Text
              style={
                textT
                  ? [styles.headerText, {color: '#004FB4'}]
                  : styles.headerText
              }>
              Tempere
            </Text>
          </TouchableOpacity>
        </View>
        <Data />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  headerText: {
    fontSize: 18,
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
export default Available;
