import React from 'react';
import { View, StyleSheet } from 'react-native';


const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
    padding: 10
  }
});
 
export default Card;