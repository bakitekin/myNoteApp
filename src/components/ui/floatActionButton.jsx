//import liraries
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {screenWidth} from '../../utils/contanst';
import {AppColors} from '../../theme/appColors';
import {Add} from 'iconsax-react-native';

// create a component
const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size={50} color={AppColors.white} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.success,
    position: 'absolute',
    bottom: 20,
    right: 30,
    borderRadius: 1000,
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
  },
});

//make this component available to the app
export default FloatActionButton;
