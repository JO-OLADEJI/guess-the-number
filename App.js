import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header.js';
import StartGameScreen from './screens/StartGameScreen.js';



export default function App() {
  const appTitle = "Guess The Number";

  return (
    <View style={styles.container}>

      <Header title={appTitle} />
      <StartGameScreen />
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
