import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

// en réutilisant le code précédent ajouter un bouton permettant d'ajouter un an à la personne.


const Project2 = ({ nom, age }) => {
  return <Text>{`Bonjour ${nom}, vous avez ${age} ans`}</Text>;
};
const Age: () => React$Node = () => {
  const [age, setAge] = React.useState(42);
  function hb() {
    setAge(age + 1);
  }

  return (
    <View>
      {/* <ButtonOnPressExample onBirthdayPress={hb} /> */}
      <Button onPress={hb} title="Happy Birthday" />
      <Project2 nom="toto" age={age} />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Age;
