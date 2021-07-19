import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>

      <Text style={styles.title}>Start a new game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput
          keyboardType="number-pad"
        />
        <View style={styles.buttonContainer}>
          <Button title="reset" onPress={() => {}} color="" />
          <Button title="start" onPress={() => {}} color="" />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },

  title: {
    //
  },

  inputContainer: {
    //
  },

  buttonContainer: {
    //
  }
});
 
export default StartGameScreen;