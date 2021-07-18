import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Cup from '../assets/drink.png';


const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
      <Image source={Cup} style={styles.headerIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#ff6347',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 20
  },

  headerIcon: {
    width: 20,
    height: 20,
    marginLeft: 3
  }
});
 
export default Header;