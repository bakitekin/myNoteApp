//import libraries
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  TextBold,
  TextalignCenter,
  TextalignJustifyleft,
  TextBlock,
  TextUnderline,
  TextalignJustifyright,
} from 'iconsax-react-native';
import {AppColors} from '../../theme/appColors';

// create a component
const EditIcons = () => {
  const Buttons = [
    {
      id: 1,
      name: 'bold',
      icon: <TextBold size="30" color={AppColors.darkGray} />,
    },
    {
      id: 2,
      name: 'block',
      icon: <TextBlock size="30" color={AppColors.darkGray} />,
    },
    {
      id: 3,
      name: 'underline',
      icon: <TextUnderline size="30" color={AppColors.darkGray} />,
    },
    {
      id: 4,
      name: 'align-left',
      icon: <TextalignJustifyleft size="30" color={AppColors.darkGray} />,
    },
    {
      id: 5,
      name: 'align-right',
      icon: <TextalignJustifyright size="30" color={AppColors.darkGray} />,
    },
    {
      id: 6,
      name: 'align-center',
      icon: <TextalignCenter size="30" color={AppColors.darkGray} />,
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map(item => (
        <TouchableOpacity style={styles.icons} key={item.id}>
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  icons: {
    marginHorizontal: 5,
    backgroundColor: AppColors.lightGray,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default EditIcons;
