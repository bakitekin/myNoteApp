//import libraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/appColors';

// create a component
const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.children ? (
        props.children
      ) : (
        <Text style={styles.text}> {title} </Text>
      )}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: AppColors.primary,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 8,
    margin: 5,
  },
  text: {
    color: AppColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Button;
