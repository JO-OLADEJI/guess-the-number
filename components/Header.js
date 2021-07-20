// core
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

// assets
import cup from '../assets/drink.png';

// constants
import colors from '../constants/colors.js';
import text from '../constants/text.js';
import icon from '../constants/icon.js';


const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
      <Image source={cup} style={styles.headerIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerText: {
    ...text.h1
  },

  headerIcon: {
    ...icon.h1,
    marginLeft: 3
  }
});
 
export default Header;