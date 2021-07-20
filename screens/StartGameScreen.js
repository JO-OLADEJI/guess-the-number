// core
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// assets
import colors from '../constants/colors.js';

// components
import text from '../constants/text.js';
import Input from '../components/Input.js';
import Card from '../components/Card.js';


const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>

      <Text style={styles.title}>Start a new game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input 
          style={styles.input}
          placeholder="1-99"
          keyboardType="numeric"
          maxLength={2}
        />

        <Card style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="reset" onPress={() => {}} color="" />
          </View>
          <View style={styles.button}>
            <Button title="start" onPress={() => {}} color={colors.primary} />
          </View>
        </Card>
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
    ...text.h2,
    marginVertical: 10
  },

  inputContainer: {
    width: 250,
    maxWidth: '80%',
    alignItems: 'center'
  },

  input: {
    textAlign: 'center'
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    width: 100,
    paddingHorizontal: 5
  }
});
 
export default StartGameScreen;