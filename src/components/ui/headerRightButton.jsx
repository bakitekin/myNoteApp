//import liraries
import {More, Paperclip, Share} from 'iconsax-react-native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/appColors';

// create a component
const HeaderRightButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Paperclip style={styles.icon} size="24" color={AppColors.black} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Share size="24" color={AppColors.black} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <More size="24" color={AppColors.black} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
});

//make this component available to the app
export default HeaderRightButton;
