import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './navigation/AuthNavigator';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      {/* <AuthNavigator /> */} 
      <TabNavigator />
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
