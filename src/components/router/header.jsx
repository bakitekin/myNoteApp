//import liraries
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import HeaderStyle from './headerStyle';
import {HambergerMenu, More, Share} from 'iconsax-react-native';
import {AppColors} from '../../theme/appColors';
import {MYNOTES} from '../../utils/routes';

// create a component
const Header = () => {
  return (
    <View style={HeaderStyle.container}>
      <Text style={HeaderStyle.headertext}> {MYNOTES} </Text>

      <View style={HeaderStyle.iconsContainer}>
        <TouchableOpacity style={HeaderStyle.leftIcon}>
          <HambergerMenu size="25" color={AppColors.black} />
        </TouchableOpacity>

        <View style={HeaderStyle.rightIcons}>
          <TouchableOpacity>
            <Share size="25" color={AppColors.black} />
          </TouchableOpacity>
          <TouchableOpacity>
            <More size="25" color={AppColors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default Header;
