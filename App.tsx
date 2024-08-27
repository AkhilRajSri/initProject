import {Text , View} from 'react-native';
import { StyleSheet } from 'react-native';
import Link from './Link';
import React from 'react';
const App: React.FC = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>App</Text>
      <Link />
    </View>
  );
}

export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});