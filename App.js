import React from 'react';
import Provider from './navigation/provider';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.MainView}>
      <Provider />
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
});

export default App;
