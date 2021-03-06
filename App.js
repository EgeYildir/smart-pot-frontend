import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import AuthNavigator from './navigation/AuthNavigator';
import TabNavigator from './navigation/TabNavigator';
import AuthContext from './auth/context';
import authStorage from './auth/storage';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  /*if (!isReady){
    return (<AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={console.log('Error loading the app.')} />);
  };*/

  return (
    <AuthContext.Provider value={{ user, setUser }} >
      <NavigationContainer style={styles.container}>
        {user ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
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
