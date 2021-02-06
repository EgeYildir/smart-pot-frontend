import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './navigation/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    alignSelf: "stretch"
  },
});
