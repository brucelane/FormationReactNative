import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import FlexBoxExercice from './FlexBoxExercice';
import Age from './Age';
import Navigator from "./src/containers/Navigator";

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 12,
    borderColor: '#5485b3',
    borderWidth: 2,
    backgroundColor: 'powderblue'
  }
})


const App = () => (
  <View style={styles.container}>
    {/* <FlexBoxExercice />
    <Age /> */}
    <Navigator />
  </View>
);

export default App;