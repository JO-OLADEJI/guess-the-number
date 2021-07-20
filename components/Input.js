// core
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

// constants
import text from '../constants/text.js';


const Input = (props) => {
  return (
    <View>
      <TextInput 
        {...props}
        style={{ ...styles.input, ...props.style }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    ...text.plainText,
    padding: 7,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
});
 
export default Input;