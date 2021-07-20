// core
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

// assets
import colors from '../constants/colors.js';

// constants
import text from '../constants/text.js';

// components
import Input from '../components/Input.js';
import Card from '../components/Card.js';


const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleInputChange = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  const handleResetInput = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const handleConfirmInput = () => {
    const validNumber = parseInt(enteredValue);
    if (validNumber === NaN || validNumber <= 0 || validNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(validNumber);
    setEnteredValue('');
  }

  let output;
  if (confirmed) {
    output = <Text>You selected: <Text style={{...text.h3}}>{selectedNumber}</Text></Text>
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input 
          style={styles.input}
          placeholder="1-99"
          keyboardType="numeric"
          maxLength={2}
          value={enteredValue}
          onChangeText={handleInputChange}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="reset" 
              onPress={handleResetInput} 
            />
          </View>
          <View style={styles.button}>
            <Button 
              title="start" 
              onPress={handleConfirmInput} 
              color={colors.primary} 
            />
          </View>
        </View>
      </Card>
      {output}
    </View>
    </TouchableWithoutFeedback>
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
    alignItems: 'center',
  },

  input: {
    textAlign: 'center',
    width: 50
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  button: {
    width: 100,
    paddingHorizontal: 5
  },

  prompt: {
    ...text.plainText
  }
});
 
export default StartGameScreen;