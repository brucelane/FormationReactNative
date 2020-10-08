import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

// Modifier le code pour avoir le rendu à cette adresse https://www.dropbox.com/s/28rap88chzvbpw7/Screenshot%202018-12-03%2012.15.01.png?dl=0

const styles = StyleSheet.create({
  container: {
    flex: 1,
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


const FlexBoxExercice = () => (
  <View style={styles.container}>
    <View style={styles.box} />
  </View>
);

export default FlexBoxExercice;